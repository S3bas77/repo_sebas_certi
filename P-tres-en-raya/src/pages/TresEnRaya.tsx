import { useState } from "react";
import './diseño.css'

type Marca= 'X' | 'O';
type Celda= Marca | null; 
type Tablero= Celda[];


const TableroInicial: Tablero= Array<Celda>(9).fill(null);

console.log(TableroInicial);

export default function TresEnRaya(){
    const [tablero, setTablero] = useState<Tablero>(TableroInicial);
    const [turno, setTurno] = useState<Marca>('X');
    const marcarCelda = (indice: number):void => {
        if(tablero[indice] !== null) return; 
        setTablero(tablero.map((celda, posicion) => {return posicion === indice ? turno : celda}));
        setTurno(turno === 'X' ? 'O' : 'X');
    }
    return (
        <table>
            <tbody>
                {[0,1,2].map((fila)=> {
                    return (
                        <tr key={fila}>{tablero.slice(fila*3, fila*3+3).map((celda, columna)=>{
                            return (
                                <td key={(fila*3+columna)}>
                                    <button onClick={()=>{marcarCelda(fila*3+columna)}}>{celda}</button>
                                </td>);})}
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )

}




