import React from 'react';
import './App.css';
import './GerePartidas.css';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponente';
import { medianaDasMedianasOrdenadas } from './medianadasmedianas';

const ResultadosTorneio = () => {

  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    setResultado(medianaDasMedianasOrdenadas);
    console.log("RESULTADO: ", medianaDasMedianasOrdenadas);
  }, []);

  return (
    <div className="ResultadosTorneio">
      <HeaderComponent />
      <div className="body">
        <div className="Podium">
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
      </div>
    </div>
  );
};

export default ResultadosTorneio;