import { useEffect, useState } from 'react'
import '/si.css'

type Bloque = {
    x:number, 
    y:number
}
let  extraterrestres = Array<Bloque>();
export default function SpaceInvader() {
    const ANCHO_BLOQUE = 5; 
    const [extraterrestre, setExtraterrestre] = useState<Array<Bloque>>([]);
    let posicion = {x:10, y:10}
    posicion = {...posicion, y:15}
    const [izquierda, setIzquierda] = useState<number>(40); 
    const [movAlien, setMovAlien] = useState<number>(5);
    const [arriba, setArriba] = useState<number>(14);
    const [abajo, setAbajo] = useState<number>(0);
    useEffect(() => {
        const movimiento: number = setInterval(()=> {
            setArriba((anterior) => {
                if(anterior <= 30) {
                    return anterior + 5 
                }else{
                    return 14
                }
                
            }) 
        }, 1000);
        return () => clearInterval(movimiento);
    }, [])

    useEffect(() => {
        const movAlien: number = setInterval(()=> {
            setAbajo((anterior) => {
                return anterior + 5 
            })
            
        }, 1000);
        return () => clearInterval(movAlien);
    }, [])
    useEffect(() => {
        const movIz: number = setInterval(()=> {
            setMovAlien((Math.floor(Math.random()*3)-1)*ANCHO_BLOQUE+5)
            
        }, 1000);
        return () => clearInterval(movIz);
    }, [])
    useEffect(()=> {
        const intervalo = setInterval(()=> {
            setExtraterrestre((listaAnt) => {
                const maxX = 75; 
                const xAleatorio = Math.floor(Math.random() * (maxX / ANCHO_BLOQUE)) * ANCHO_BLOQUE;
                const nuevoAlien: Bloque = {
                    x:xAleatorio,
                    y:0
                };
                return [...listaAnt, nuevoAlien]
            })
        }, 1000);
        return () => clearInterval(intervalo);
    }, [])
    return (
        
        <>
        <section className="arma">
        </section>
        <section className='bala' style={{left:`${izquierda}rem`, bottom: `${arriba}rem`}}> 
        </section>
        <section className='alien' style={{left: `${movAlien}rem`, top: `${abajo}rem`}}>
            {extraterrestre.map((item, index) => {
                return (
                    <section key={index} className='alien' style={{left: `${item.x}rem`, top: `${item.y}rem`}} />
                )
            })}

        </section>
        </>
    )
}