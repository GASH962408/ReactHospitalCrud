# app/config.py
import os
class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'gash2408'
    # Configurar la conexión a MySQL
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'mysql+pymysql://root:gash2408@localhost/react_hospital_crud'
    
    # Evitar rastrear modificaciones innecesarias
    SQLALCHEMY_TRACK_MODIFICATIONS = False
