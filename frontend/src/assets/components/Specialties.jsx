import React from 'react';
import './Specialties.css';

const Specialties = () => {
  return (
    <div className="specialties-container">
      <h1 className="title">Especialidades</h1>
      <div className="specialties-grid">
        <div className="specialty">
          <img src="./card1.jpg" alt="Cirugía general" />
          <h3>Cirugía general</h3>
          <a href="#cirugia">Ver +</a>
        </div>


        <div className="specialty">
          <img src="./card2.jpg" alt="Oftalmología" />
          <h3>Oftalmología</h3>
          <a href="#oftalmologia">Ver +</a>
        </div>


        <div className="specialty">
          <img src="./card3.jpg" alt="Hospitalización" />
          <h3>Hospitalización</h3>
          <a href="#hospitalizacion">Ver +</a>
        </div>



        <div className="specialty">
          <img src="./card4.jpg" alt="Geriatría" />
          <h3>Geriatría</h3>
          <a href="#geriatria">Ver +</a>
        </div>


        <div className="specialty">
          <img src="./card5.jpg" alt="Ginecología" />
          <h3>Ginecología</h3>
          <a href="#ginecologia">Ver +</a>
        </div>


        <div className="specialty">
          <img src="./card6.jpg" alt="Consultorio externo" />
          <h3>Consultorio externo</h3>
          <a href="#consultorio">Ver +</a>
        </div>

        
      </div>
    </div>
  );
};

export default Specialties;
