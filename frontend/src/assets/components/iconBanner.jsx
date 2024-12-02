import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUserMd, faGlobe, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import './iconBanner.css';

const IconBanner = () => {
    return (
        <section>
            <div className="iconsBanner">
                <div className="iconItem">
                    <FontAwesomeIcon icon={faBed} size="2x" />
                    <p>10</p>
                    <span>Años de trayectoria</span>
                </div>
                <div className="iconItem">
                    <FontAwesomeIcon icon={faUserMd} size="2x" />
                    <p>+25</p>
                    <span>Especialistas médicos</span>
                </div>
                <div className="iconItem">
                    <FontAwesomeIcon icon={faGlobe} size="2x" />
                    <p>+7</p>
                    <span>Tipos de terapias</span>
                </div>
                <div className="iconItem">
                    <FontAwesomeIcon icon={faAmbulance} size="2x" />
                    <p>24/7</p>
                    <span>Horas al día</span>
                </div>
            </div>
        </section>
    );
};

export default IconBanner;
