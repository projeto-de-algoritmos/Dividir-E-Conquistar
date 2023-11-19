import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import GerePartidas from './GerePartidas';
import ResultadosTorneio from './ResultadosTorneio';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gere-partidas" element={<GerePartidas />} />
          <Route path="/resultados" element={<ResultadosTorneio />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;