import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { UIProvider } from './contexts/ui.context.tsx'
import './styles/global.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
   
  </React.StrictMode>,
)
