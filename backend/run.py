# run.py
from app import create_app
# Crear una instancia de la aplicación Flask
app = create_app()
if __name__ == '__main__':
    # Ejecutar la aplicación en modo debug
    app.run(debug=True)
