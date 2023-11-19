import React from 'react';
import { Link } from 'react-router-dom';

const PlacaresCasas = () => {
  return (
    <div className="PlacaresCasas">
      <div className="buttons">
        <Link to="/gere-partidas">
          <button className='partidas'>Começar Partidas</button>
        </Link>
      </div>
    </div>
  );
};

export default PlacaresCasas;
