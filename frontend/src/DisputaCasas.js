import React from 'react';
import { Link } from 'react-router-dom';
// import { resultadoContagem } from './pontuacoes.dto';


const PlacaresCasas = () => {
  // const [grifinoria, setGrifinoria] = useState([]);
  // const [faseDois, setSonserina] = useState([]);
  // const [faseTres, setLufaLufa] = useState([]);
  // const [faseQuatro, setCorvinal] = useState([]);
  // useEffect(() => {
  //   setGrifinoria(resultadoContagem[0]); // Ajuste para pegar apenas a primeira posição
  //   setSonserina(resultadoContagem[1]); // Ajuste para pegar apenas a segunda posição
  //   setLufaLufa(resultadoContagem[2]); // Ajuste para pegar apenas a terceira posição]
  //   setCorvinal(resultadoContagem[3]); // Ajuste para pegar apenas a quarta posição
  // }, []);
  
  return (
    <div className="PlacaresCasas">
      <div className="buttons">
        <Link to="/gere-partidas">  
          <button className='medmed'>Mediana das Medianas</button>
        </Link>
        <Link to="/gere-partidas">
          <button className='partidas'>Começar Partidas</button>
        </Link>
      </div>
    </div>
  );
};

export default PlacaresCasas;