import React from 'react';
import './WithUs.css';

const WithUs = () => {
  return (
    <div className="with-us">
      <h1 className="title">¿Por qué atenderte con nosotros?</h1>
      <div className="icons">
        <div className="icon">
          <img src="./image1.jpg" alt="Profesionales Internacionales" />
          <p>Profesionales Internacionales</p>
        </div>
        <div className="icon">
          <img src="./image2.jpg" alt="Laboratorios de última generación" />
          <p>Laboratorios de última generación</p>
        </div>
        <div className="icon">
          <img src="./image3.jpg" alt="Hospitalización" />
          <p>Hospitalización</p>
        </div>
        <div className="icon">
          <img src="./image4.jpg" alt="Acompañamiento" />
          <p>Acompañamiento</p>
        </div>
      </div>
    </div>
  );
};

export default WithUs;
