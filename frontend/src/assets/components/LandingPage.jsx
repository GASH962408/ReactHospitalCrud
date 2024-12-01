import React from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Ícono de calendario
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
    return (
        <section className="landing-page">
            <div className="landing-content">
                <h1>Clínica Perseo Hoffman</h1>
                <p>Atendemos las 24 Horas los 7 días</p>
                <p className="location">Arequipa, Perú</p>
                <button className="cta-button">
                    <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
                    Separar cita
                </button>
            </div>
            <div className="landing-image">
                <img src="/subLandingPage.png" alt="Doctores en acción" />
            </div>
        </section>
    );
};

export default LandingPage;
