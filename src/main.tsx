import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { UIProvider } from './contexts/ui.context.tsx'
import './styles/global.css'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UIProvider>
  </React.StrictMode>,
)
