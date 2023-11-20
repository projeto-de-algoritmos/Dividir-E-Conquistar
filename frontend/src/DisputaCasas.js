import React from 'react';
import { Link } from 'react-router-dom';

const PlacaresCasas = () => {
  return (
    <div className="PlacaresCasas">
      <div className="dumb"/>
      <div className='text-db'>
        <h3>"A Glória eterna! Isto é o que aguarda o estudante que vencer o torneio tribruxo, mas para isso, ele precisará sobreviver em três tarefas. Três tarefas extremamente perigosas."</h3>
      </div>
      <div className="buttons">
        <Link to="/gere-partidas">
          <button className='partidas'>Começar Partidas</button>
        </Link>
      </div>
    </div>
  );
};

export default PlacaresCasas;
