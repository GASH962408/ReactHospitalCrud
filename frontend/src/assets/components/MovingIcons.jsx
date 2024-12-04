import React from 'react';
import { FaFacebook, FaInstagram, FaApple, FaSpotify, FaLinkedin, FaTwitter, FaTiktok, FaGoogle, FaWordpress } from 'react-icons/fa';
import './MovingIcons.css'; // Archivo de estilos para la animación

const MovingIcons = () => {
  return (
    <div className="moving-icons-wrapper">
      <div className="moving-icons-container">
        <div className="moving-row">
          <FaFacebook />
          <FaInstagram />
          <FaApple />
          <FaSpotify />
          <FaLinkedin />
        </div>
        <div className="moving-row">
          <FaTwitter />
          <FaTiktok />
          <FaGoogle />
          <FaWordpress />
        </div>
      </div>
    </div>
  );
}

export default MovingIcons;
