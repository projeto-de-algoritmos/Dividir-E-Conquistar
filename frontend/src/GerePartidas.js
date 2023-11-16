import React, { useEffect, useState } from 'react';
import { fasesDePontuacoes } from './pontuacoes.dto';
import HeaderComponent from "./HeaderComponente";
import './GerePartidas.css';

const GerePartidas = () => {
  const [faseUm, setFasesDePontuacoesUm] = useState([]);
  const [faseDois, setFasesDePontuacoesDois] = useState([]);
  const [faseTres, setFasesDePontuacoesTres] = useState([]);
  const [faseQuatro, setFasesDePontuacoesQuatro] = useState([]);

  useEffect(() => {
    setFasesDePontuacoesUm(fasesDePontuacoes[0]); // Ajuste para pegar apenas a primeira posição
    setFasesDePontuacoesDois(fasesDePontuacoes[1]); // Ajuste para pegar apenas a segunda posição
    setFasesDePontuacoesTres(fasesDePontuacoes[2]); // Ajuste para pegar apenas a terceira posição]
    setFasesDePontuacoesQuatro(fasesDePontuacoes[3]); // Ajuste para pegar apenas a quarta posição
  }, []);

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="body">
        <div className="GryffindorG">
          <p>Fase 1</p>
          <div className="contents">
            <div>
              <h2>Fase 1</h2>
              {Object.entries(faseUm).map(([partida, pontuacao]) => (
                <div key={partida}>
                  <p>{partida}: {pontuacao[0]} - {pontuacao[1]}</p>
                </div>
              ))}
            </div>
          </div>
          <button>Gerar Resultado</button>
        </div>
        <div className="SlytherinG">
          <h2>Fase 2</h2>
          {Object.entries(faseDois).map(([partida, pontuacao]) => (
                <div key={partida}>
                  <p>{partida}: {pontuacao[0]} - {pontuacao[1]}</p>
                </div>
              ))}
        </div>
        <div className="RavenclawG">
          <h2>Fase 3</h2>
          {Object.entries(faseTres).map(([partida, pontuacao]) => (
                <div key={partida}>
                  <p>{partida}: {pontuacao[0]} - {pontuacao[1]}</p>
                </div>
              ))}
        </div>
        <div className="HufflepuffG">
          <h2>Fase 4</h2>
          {Object.entries(faseQuatro).map(([partida, pontuacao]) => (
                <div key={partida}>
                  <p>{partida}: {pontuacao[0]} - {pontuacao[1]}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default GerePartidas;
