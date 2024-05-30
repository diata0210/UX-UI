import React from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { TaskProvider } from './contexts/TaskContext.tsx'
// import { UIProvider } from './contexts/ui.context.tsx'
import './styles/global.css'
import './styles/index.css'
import "./styles/plugin.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskProvider>
  </React.StrictMode>,
)
