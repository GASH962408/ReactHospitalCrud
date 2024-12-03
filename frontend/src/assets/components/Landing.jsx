import React from 'react';
import './Landing.css';
import Header from './Header'; 
import BannerIcons from './BannerIcons';
import WithUs from './WithUs';
import Specialties from './Specialties';
import Subscription from './Subscription';
import Carousel from './Carousel';

const Landing = () => {
  return (
    <>
    <div className='landingback'>
    <Header />
    <div className="landing-container">
      <div className="column column-left">
        <h1>Clinica Perseo Hoffman</h1>
        <h2>Atendemos las 24 Horas los 7 días</h2>
        <h3>Arequipa, Perú</h3>
        <div className="location">
          <i className="fas fa-map-marker-alt"></i> {/* Icono */}
          <span>Arequipa, Perú</span>
        </div>
        <button className="appointment-button">
          Separar cita <i className="fas fa-plus"></i> {/* Icono */}
        </button>
      </div>
      <div className="column column-right">
        <img src="./subLandingPage.png" alt="Cirujanos trabajando" className="image" />
      </div>
    </div>
    </div>
    <BannerIcons/>
    <WithUs/>
    <Specialties/>
    <Subscription/>
    <Carousel/>
    </>
  );
};

export default Landing;
