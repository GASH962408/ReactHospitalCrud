# app/routes.py
from flask import Blueprint, jsonify
# Crear un blueprint llamado 'main'
main = Blueprint('main', __name__)
@main.route('/', methods=['GET'])
def home():
    """Ruta raíz para verificar que la API funciona correctamente."""
    return jsonify({"message": "¡La API está funcionando correctamente hermano ssss!"}), 200
