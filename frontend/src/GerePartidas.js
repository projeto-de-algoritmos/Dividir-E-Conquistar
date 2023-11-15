import React from "react";
import HeaderComponent from "./HeaderComponente";
import './GerePartidas.css';

const GerePartidas = () => {
  
  return (
    <div>
    <HeaderComponent></HeaderComponent>
    <div className="body">
      <div className="GryffindorG">
      <p>Fase 1</p>
      <div className="contents">
        <p>'Gifinória vs Sonserina': 2,0</p>
        <p>'Gifinória vs Lufalufa': 2,0</p>
        <p>'Gifinória vs Corvinal': 2,0</p>
      </div>
      <button>Gerar Resultado</button>  
      </div>
      <div className="SlytherinG">
        <p>Fase 2</p>
      </div>
      <div className="RavenclawG">
        <p>Fase 3</p>
      </div>
      <div className="HufflepuffG">
        <p>Fase 4</p>
      </div>
    </div>
    </div>
  );
};

export default GerePartidas;