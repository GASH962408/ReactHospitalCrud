# app/models.py
from . import db
from datetime import datetime

# app/models.py
from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Identificador único local
    email = db.Column(db.String(120), unique=True, nullable=False)  # Email del usuario (Auth0)
    username = db.Column(db.String(80), unique=True, nullable=False)  # Nombre de usuario
