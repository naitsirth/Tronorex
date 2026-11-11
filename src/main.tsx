import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'
import './styles/layout.css'
import './styles/tarjetas.css'

// Punto de entrada de React: monta <App /> dentro del <div id="root"> de index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
