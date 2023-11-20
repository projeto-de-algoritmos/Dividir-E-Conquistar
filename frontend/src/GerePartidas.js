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
      <div className="body">
        <div className="contents">
            <h2 className="primeiro">Primeiro</h2>
            <h2 className="segundo">Segundo</h2>
            <h2 className="terceiro">Terceiro</h2>
            <h2 className="quarto">Quarto</h2>
        </div>
      </div>
      <div className="bottom-content">
          <Link to="/">
            <button className="voltar">Voltar para Hogwarts</button>
          </Link>
          <Link to="/resultados">
            <button className="voltar">Gerar Resultado do Torneio</button>
          </Link>
      </div>
    </div>
  );
};

export default GerePartidas;
