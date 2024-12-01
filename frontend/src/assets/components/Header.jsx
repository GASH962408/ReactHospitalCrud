import React from 'react';
import './Header.css';
// Importar íconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faConciergeBell, faUserMd, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="Lista">
                    <li>
                        <a href="/Inicio">
                            <FontAwesomeIcon icon={faHome} className="icon" /> Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/Servicios">
                            <FontAwesomeIcon icon={faConciergeBell} className="icon" /> Servicios
                        </a>
                    </li>
                    <li>
                        <a href="/Doctores">
                            <FontAwesomeIcon icon={faUserMd} className="icon" /> Doctores
                        </a>
                    </li>
                    <li>
                        <a href="/Programar">
                            <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Programar cita
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
