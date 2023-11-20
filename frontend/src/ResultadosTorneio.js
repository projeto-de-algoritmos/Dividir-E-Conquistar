import React from 'react';
import './App.css';
import './GerePartidas.css';
import { Link } from 'react-router-dom';


const ResultadosTorneio = () => {

  // const [resultado, setResultado] = useState([]);

  // useEffect(() => {
  //   setResultado(medianaDasMedianasOrdenadas);
  //   console.log("RESULTADO: ", medianaDasMedianasOrdenadas);
  // }, []);

  return (
    <div className="ResultadosTorneio">
     <div className="HeaderResult"/>
      <div className="bodyResult">
        <div className="Podium">
          <h3>O PROFETA DIARIO INFORMA: TORNEIO TRIBRUXO CANCELADO</h3>

          <p>Pela primeira vez em toda sua história, o Torneio Tribruxo foi cancelado devido ao falecimento do participante Cedrico Diggory - Escola de Magia e Bruxaria de Hogwarts. A causa exata de seu falecimento ainda não foi definida, mas fortes suspeitas apontam para outro aluno da escola: Harry Potter que, em sua defesa, chocou o mundo mágico com a revelação de que "Aquele que não deve ser nomeado" voltou.
Teorias dizem que isso foi apenas autodefesa do rapaz para ser inocentado, já outros acreditam que ele está falando a verdade. 
Fiquem ligados para novas notícias.</p>
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