import { useState } from 'react'
import type {KeyboardEvent} from 'react'

type food = '🔸' | null; 
type snakeHead = '🔵'| null; 
type body = '⭕'| null; 
type Celda = food | snakeHead | body | null;
type Tablero= Celda[];

const TableroPrincipal: Tablero = Array<Celda>(64).fill(null)

const generarPosicionComida = ():number => {
  return Math.floor(Math.random() * TableroPrincipal.length)
}

import './App.css'

function App() {
  const [posicionComida, setPosicionComida] = useState<number>(generarPosicionComida);
  const [serpiente, setSerpiente] = useState<number[]>(() => [27, 28, 29]);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const reiniciarJuego = () => {
    setSerpiente([27, 28, 29]);
    setPosicionComida(generarPosicionComida());
    setJuegoTerminado(false);
  }

  const chocarConBorde = () => {
    setJuegoTerminado(true);
    setTimeout(reiniciarJuego, 1200);
  }

  const manejarTecla = (evento: KeyboardEvent<HTMLDivElement>) => {
    if(evento.key === 'ArrowUp'){
      if (serpiente[0] < 8) {
        chocarConBorde()
        return
      }
      const nuevaCabeza = serpiente[0] - 8;
      if(serpiente[0] === posicionComida){
        setPosicionComida(generarPosicionComida());
        setSerpiente([nuevaCabeza, ...serpiente]);
      }
      else{
        setSerpiente([nuevaCabeza, ...serpiente.slice(0, -1)]);
      }
      console.log('arriba'); 
    }
    if(evento.key === 'ArrowDown'){
      if (serpiente[0] >= 56) {
        chocarConBorde()
        return
      }
      const nuevaCabeza = serpiente[0] + 8;
      if(serpiente[0] === posicionComida){
        setPosicionComida(generarPosicionComida());
        setSerpiente([nuevaCabeza, ...serpiente]);
      }
      else{
        setSerpiente([nuevaCabeza, ...serpiente.slice(0, -1)]);
      }
      console.log('abajo');
    }
    if(evento.key === 'ArrowLeft'){
      if (serpiente[0] % 8 === 0) {
        chocarConBorde()
        return
      }
      const nuevaCabeza = serpiente[0] - 1;
      if(serpiente[0] === posicionComida){
        setPosicionComida(generarPosicionComida());
        setSerpiente([nuevaCabeza, ...serpiente]);
      }
      else{
        setSerpiente([nuevaCabeza, ...serpiente.slice(0, -1)]);
      }
      console.log('izquierda');
    }
    if(evento.key === 'ArrowRight'){
      if (serpiente[0] % 8 === 7) {
        chocarConBorde()
        return
      }
      const nuevaCabeza = serpiente[0] + 1;
      if(serpiente[0] === posicionComida){
        setPosicionComida(generarPosicionComida());
        setSerpiente([nuevaCabeza, ...serpiente]);
      }
      else{
        setSerpiente([nuevaCabeza, ...serpiente.slice(0, -1)]);
      }
      console.log('derecha');
    }
  }

  return (
    <div tabIndex={0} onKeyDown={manejarTecla}>
      <table className={juegoTerminado ? 'colision' : ''}>
        <tbody>
          {[0,1,2,3,4,5,6,7].map((fila)=> {
            return (
              <tr key={fila}>{TableroPrincipal.slice(fila*8, fila*8+8).map((_, columna)=>{
                const indice = fila*8+columna;
                let contenido: Celda = null; 
                if(indice === posicionComida){
                  contenido = '🔸';
                }
                if(serpiente.includes(indice)){
                  contenido = '⭕';
                }
                if(indice === serpiente[0]){
                  contenido = '🔵';
                }
                return (
                  <td key={(indice)}> {contenido}
                  </td>);
                })}
              </tr>
            )
          })}
        </tbody>

      </table>
     
    </div>
  )
}

export default App
