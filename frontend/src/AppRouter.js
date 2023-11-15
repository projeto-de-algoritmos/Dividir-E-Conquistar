import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import GerePartidas from './GerePartidas';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gere-partidas" element={<GerePartidas />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;