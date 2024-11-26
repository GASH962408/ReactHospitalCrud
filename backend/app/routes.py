from flask import Blueprint, jsonify, redirect, request, session
import requests
from urllib.parse import urlencode
from .config import Config
from .models import User
from . import db

main = Blueprint('main', __name__)

AUTH0_BASE_URL = f"https://{Config.AUTH0_DOMAIN}"

# Ruta raíz para verificar que la API está funcionando
@main.route('/')
def home():
    """Ruta principal para verificar el funcionamiento de la API."""
    return jsonify({"message": "¡La API está funcionando correctamente!"}), 200

# Ruta para iniciar sesión
@main.route('/login')
def login():
    """Redirigir al usuario a Auth0 para iniciar sesión."""
    params = {
        'client_id': Config.AUTH0_CLIENT_ID,
        'response_type': 'code',
        'redirect_uri': Config.AUTH0_CALLBACK_URL,
        'scope': 'openid profile email'
    }
    return redirect(f"{AUTH0_BASE_URL}/authorize?" + urlencode(params))

# Ruta para manejar el callback de Auth0
@main.route('/callback')
def callback():
    """Procesar el callback de Auth0 y registrar o actualizar al usuario."""
    code = request.args.get('code')
    if not code:
        return jsonify({"error": "No se recibió un código de autorización"}), 400

    # Intercambiar el código por un token
    token_url = f"{AUTH0_BASE_URL}/oauth/token"
    token_payload = {
        'client_id': Config.AUTH0_CLIENT_ID,
        'client_secret': Config.AUTH0_CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': Config.AUTH0_CALLBACK_URL
    }
    token_response = requests.post(token_url, json=token_payload)
    if token_response.status_code != 200:
        return jsonify({"error": "Error al intercambiar el código por un token"}), 500
    token_data = token_response.json()

    # Obtener la información básica del usuario desde Auth0
    userinfo_url = f"{AUTH0_BASE_URL}/userinfo"
    headers = {'Authorization': f"Bearer {token_data['access_token']}"}
    userinfo_response = requests.get(userinfo_url, headers=headers)
    if userinfo_response.status_code != 200:
        return jsonify({"error": "Error al obtener información del usuario"}), 500
    userinfo = userinfo_response.json()

    # Extraer datos básicos
    email = userinfo.get('email')
    username = userinfo.get('nickname', email)  # Usa 'nickname' o 'email' como username

    # Verificar si el usuario ya existe en la base de datos
    user = User.query.filter_by(email=email).first()
    if not user:
        # Crear un nuevo usuario
        user = User(email=email, username=username)
        db.session.add(user)
        db.session.commit()

    # Guardar en la sesión
    session['user'] = {
        'username': user.username,
        'email': user.email
    }
    return jsonify(session['user'])

# Ruta para cerrar sesión
@main.route('/logout')
def logout():
    """Cerrar sesión del usuario en la aplicación y en Auth0."""
    session.clear()  # Limpia la sesión local
    params = {
        'client_id': Config.AUTH0_CLIENT_ID,
        'returnTo': 'http://localhost:5000'  # Redirigir al home después del logout
    }
    return redirect(f"{AUTH0_BASE_URL}/v2/logout?" + urlencode(params))
