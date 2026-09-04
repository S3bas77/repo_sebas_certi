import { createRoot } from 'react-dom/client'
import TresEnRaya from './TresEnRaya.jsx'
import './App.css'

export default function App(){
  const contenedor = document.getElementById('root')
    const root = createRoot(contenedor)

    root.render(
        <TresEnRaya />
    )
}