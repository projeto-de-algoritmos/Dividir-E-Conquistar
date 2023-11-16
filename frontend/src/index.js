import React from 'react';
import { createRoot } from 'react-dom/client';  // Importe createRoot de 'react-dom/client'
import './index.css';
import AppRouter from './AppRouter';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
