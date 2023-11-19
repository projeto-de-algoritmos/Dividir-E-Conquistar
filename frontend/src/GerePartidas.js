import React, { useEffect, useState } from 'react';
import { fasesDePontuacoes } from './pontuacoes.dto';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponente';
import './GerePartidas.css';

const GerePartidas = () => {
  const [faseAtual, setFaseAtual] = useState(1);
  const [fasesDePontuacoesAtuais, setFasesDePontuacoesAtuais] = useState([]);

  useEffect(() => {
    setFasesDePontuacoesAtuais(fasesDePontuacoes[faseAtual - 1]); // Ajuste para pegar a fase atual
  }, [faseAtual]);

  const avancarParaProximaFase = () => {
    // Aumenta a fase atual
    setFaseAtual((fase) => fase + 1);
  };

  return (
    <div>
      <HeaderComponent />
      <div className={`body ${faseAtual === 1 ? 'show' : 'hide'}`}>
          {faseAtual < 4 && (
          <button className="gerar" onClick={avancarParaProximaFase}>Próxima Fase</button>
          )}
          
          {faseAtual === 4 && (
          <Link to="/resultados">
          <button className='medmed'>Resultados do Torneio</button>
          </Link>
          )}
          <div className="contents">
            <h2>Fase {faseAtual}</h2>
            {Object.entries(fasesDePontuacoesAtuais).map(([partida, pontuacao]) => (
              <div key={partida}>
                <p>{partida}: {pontuacao[0]} - {pontuacao[1]}</p>
              </div>
            ))}
          </div>
      </div>
      <div className="bottom-content">
          <Link to="/">
            <button className="voltar">Voltar para Hogwarts</button>
          </Link>
      </div>
    </div>
  );
};

export default GerePartidas;
