import React from 'react';
import './BannerIcons.css';

const BannerIcons = () => {
  return (
    <div className="banner-icons">

      <div className="icon-item">
        <i className="fas fa-user-md"></i>
        <h2>10</h2>
        <p>Años de trayectoria</p>
      </div>


      <div className="icon-item">
        <i className="fas fa-user-md"></i>
        <h2>+25</h2>
        <p>Especialistas médicos</p>
      </div>


      <div className="icon-item">
        <i className="fas fa-virus"></i>
        <h2>+7</h2>
        <p>Tipos de terapias</p>
      </div>


      <div className="icon-item">
        <i className="fas fa-ambulance"></i>
        <h2>24/7</h2>
        <p>Horas al día</p>
      </div>
    </div>
  );
};

export default BannerIcons;
