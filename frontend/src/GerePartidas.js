import React, { useEffect, useState } from 'react';
import { resultadoUm, resultadoDois, resultadoTres, resultadoQuatro, torneioUm, torneioDois, torneioTres, torneioQuatro} from './medianadasmedianas.js';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponente';
import './GerePartidas.css';

const GerePartidas = () => {
  const [torneioCedrico, setTorneioCedrico] = useState(1);
  const [torneioHarry, setTorneioHarry] = useState(1);
  const [torneioFleur, setTorneioFleur] = useState(1);
  const [torneioVitor, setTorneioVitor] = useState(1);

  const textos = ['Dragões', 'O Lago', 'O Labirinto'];
  const resultadoCedrico = resultadoUm.map((valor, index) => (
    <React.Fragment key={index}>
      <span className="cedrico">{`${index + 1}ª Tarefa: ${textos[index]} - `}</span>
      <span>{`${valor} pontos`}</span>
      <br />
  </React.Fragment>
  ));
  const resultadoHarry = resultadoDois.map((valor, index) => (
    <React.Fragment key={index}>
      <span className="cedrico">{`${index + 1}ª Tarefa: ${textos[index]} - `}</span>
      <span>{`${valor} pontos`}</span>
      <br />
  </React.Fragment>
  ));
  const resultadoFleur = resultadoTres.map((valor, index) => (
    <React.Fragment key={index}>
      <span className="cedrico">{`${index + 1}ª Tarefa: ${textos[index]} - `}</span>
      <span>{`${valor} pontos`}</span>
      <br />
  </React.Fragment>
  ));
  const resultadoVitor = resultadoQuatro.map((valor, index) => (
    <React.Fragment key={index}>
      <span className="cedrico">{`${index + 1}ª Tarefa: ${textos[index]} - `}</span>
      <span>{`${valor} pontos`}</span>
      <br />
  </React.Fragment>
  ));


  useEffect(() => {  
    setTorneioCedrico(torneioUm);
    setTorneioHarry(torneioDois);
    setTorneioFleur(torneioTres);
    setTorneioVitor(torneioQuatro);
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div className="body">
        <div className="contents">
          <div>
          <h2 className="primeiro">Cedrico Diggory - Escola de Magia e Bruxaria de Hogwarts (Hufflepuff)</h2>
            <p className="cedrico">{resultadoCedrico}</p>
            <p className="cedrico"> Pontuação final: {torneioCedrico}</p>
          </div>
          <div>
          <h2 className="primeiro">Harry Potter - Escola de Magia e Bruxaria de Hogwarts (Gryffindor)</h2>
            <p className="cedrico">{resultadoHarry}</p>
            <p className="cedrico">Pontuação final: {torneioHarry}</p>
          </div>
          <div>
          <h2 className="primeiro">Fleur Delacour - Academia de Magia Beauxbatons</h2>
            <p className="cedrico">{resultadoFleur}</p>
            <p className="cedrico">Pontuação final: {torneioFleur}</p>
          </div>
          <div>
          <h2 className="primeiro">Vítor Krum - Instituto Durmstrang</h2>
            <p className="cedrico">{resultadoVitor}</p>
            <p className="cedrico">Pontuação final: {torneioVitor}</p>
          </div>
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
