import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TresEnRaya from './TresEnRaya.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TresEnRaya />
  </StrictMode>,
)
