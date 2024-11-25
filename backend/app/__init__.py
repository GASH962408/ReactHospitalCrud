# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from .config import Config

# Crear las instancias globales
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Inicializar las extensiones
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)  # Habilitar CORS

    # Registrar rutas
    from .routes import main
    app.register_blueprint(main)

    return app
