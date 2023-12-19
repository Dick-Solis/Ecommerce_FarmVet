import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Global } from '@emotion/react';
import { global, reset } from './styles/global.jsx';
import { HashRouter } from 'react-router-dom'
import { CartProvider } from './context/cartContext.jsx';
import ScrollToTop from './components/scroll/scrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ScrollToTop/>
    <React.StrictMode>
      <Global styles={reset} />
      <Global styles={global} />
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  </HashRouter>
)
