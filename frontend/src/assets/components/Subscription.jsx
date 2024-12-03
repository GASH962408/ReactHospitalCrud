import React from 'react';
import './Subscription.css';

const Subscription = () => {
  return (
    <div className="subscription-container">
      <h2 className="subscription-title">
        SUSCRÍBETE Y ENTÉRATE DE TODOS NUESTROS SERVICIOS Y ESPECIALIDADES
      </h2>
      <p className="subscription-subtitle">Déjanos tu correo electrónico</p>
      <form className="subscription-form">
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="subscription-input"
        />
        <button type="submit" className="subscription-button">
          Suscribirse
        </button>
      </form>
    </div>
  );
};

export default Subscription;
