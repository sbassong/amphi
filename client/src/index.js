import React from 'react';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
let root = createRoot(container);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

