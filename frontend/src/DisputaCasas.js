import React from "react";
import { Link } from 'react-router-dom';

const PlacaresCasas = () => {
  
  return (
    <div className="PlacaresCasas">
    <div className="body">
      <div className="Gryffindor">
      <h4>Gryffindor</h4>
      <h5>Vitórias: 4</h5>
      <h5>Empates: 2</h5>
      <h5>Derrotas: 0</h5>
      <h5>Pontuação: 14</h5>
      </div>
      <div className="Slytherin">
        <h4>Slytherin</h4>
        <h5>Vitórias: 4</h5>
        <h5>Empates: 2</h5>
        <h5>Derrotas: 0</h5>
        <h5>Pontuação: 14</h5>
      </div>
      <div className="Ravenclaw">
        <h4>Ravenclaw</h4>
        <h5>Vitórias: 4</h5>
        <h5>Empates: 2</h5>
        <h5>Derrotas: 0</h5>
        <h5>Pontuação: 14</h5>
      </div>
      <div className="Hufflepuff">
        <h4>Hufflepuff</h4>
        <h5>Vitórias: 4</h5>
        <h5>Empates: 2</h5>
        <h5>Derrotas: 0</h5>
        <h5>Pontuação: 14</h5>
      </div>
    </div>
    <div className="buttons">
    <button>Gerar Vencedor</button>
    <Link to="/gere-partidas">
          <button>Começar Partidas</button>
    </Link>
    </div>
    </div>
  );
};

export default PlacaresCasas;