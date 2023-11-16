import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { resultadoContagem } from './pontuacoes.dto';


const PlacaresCasas = () => {
  const [grifinoria, setGrifinoria] = useState([]);
  const [faseDois, setSonserina] = useState([]);
  const [faseTres, setLufaLufa] = useState([]);
  const [faseQuatro, setCorvinal] = useState([]);
  useEffect(() => {
    setGrifinoria(resultadoContagem[0]); // Ajuste para pegar apenas a primeira posição
    setSonserina(resultadoContagem[1]); // Ajuste para pegar apenas a segunda posição
    setLufaLufa(resultadoContagem[2]); // Ajuste para pegar apenas a terceira posição]
    setCorvinal(resultadoContagem[3]); // Ajuste para pegar apenas a quarta posição
  }, []);
  
  return (
    <div className="PlacaresCasas">
    <div className="body">
      <div className="Gryffindor">
    
      </div>
      <div className="Slytherin">
      {Object.entries(grifinoria).map(([partida, pontuacao]) => (
                <div key={partida}>
                  <p>{partida}: {pontuacao[0]} - {pontuacao[1]}</p>
                </div>
              ))}
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