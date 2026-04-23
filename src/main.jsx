import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import AppErrorBoundary from './components/AppErrorBoundary'
import { CartProvider } from './context/CartContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <HashRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </HashRouter>
    </AppErrorBoundary>
  </React.StrictMode>,
)
