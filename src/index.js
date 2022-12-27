import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/reset.css"
import "./assets/main.css"
import CurrencyContext from './context/CurrencyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrencyContext>
    <App />
  </CurrencyContext>
);
