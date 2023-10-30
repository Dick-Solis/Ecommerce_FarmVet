import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Global } from '@emotion/react';
import { global, reset } from './styles/global.jsx';
import { HashRouter } from 'react-router-dom'
import { CartProvider } from './context/cartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <Global styles={reset} />
      <Global styles={global} />
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  </HashRouter>
)
