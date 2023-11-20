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

  const textos = ['Torneio de Quadribol', 'Disputa de vôos em vassoura', 'Dragões', 'O Lago', 'O Labirinto'];
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
          <div className="primeiro">
          <h2 className="cedrico">Cedrico Diggory - Escola de Magia e Bruxaria de Hogwarts (Hufflepuff)</h2>
            <p className="cedrico">{resultadoCedrico}</p>
            <h4 className="cedrico"> Pontuação final: {torneioCedrico}</h4>
          </div>
          <div className="primeiro">
          <h2 className="cedrico">Harry Potter - Escola de Magia e Bruxaria de Hogwarts (Gryffindor)</h2>
            <p className="cedrico">{resultadoHarry}</p>
            <h4 className="cedrico">Pontuação final: {torneioHarry}</h4>
          </div>
          <div className="primeiro">
          <h2 className="cedrico">Fleur Delacour - Academia de Magia Beauxbatons</h2>
            <p className="cedrico">{resultadoFleur}</p>
            <h4 className="cedrico">Pontuação final: {torneioFleur}</h4>
          </div>
          <div className="primeiro">
          <h2 className="cedrico">Vítor Krum - Instituto Durmstrang</h2>
            <p className="cedrico">{resultadoVitor}</p>
            <h4 className="cedrico">Pontuação final: {torneioVitor}</h4>
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
