import { useEffect, useState } from 'react'
import '/si.css'

type Bloque = {
    x:number, 
    y:number
}
export default function SpaceInvader() {
    const ANCHO_BLOQUE = 5; 
    const MAX_ENEMIGOS = 5;
    const crearEnemigo = (): Bloque => ({
        x: Math.floor(Math.random() * (75 / ANCHO_BLOQUE)) * ANCHO_BLOQUE,
        y: 0
    });
    const [extraterrestre, setExtraterrestre] = useState<Array<Bloque>>(() =>
        Array.from({length: MAX_ENEMIGOS}, () => crearEnemigo())
    );
    const [izquierda, setIzquierda] = useState<number>(40); 
    const [arriba, setArriba] = useState<number>(5);
    const [balaX, setBalaX] = useState<number>(40);
    const [disparando, setDisparando] = useState<boolean>(false);

    useEffect(() => {
        const controlarJugador = (evento: KeyboardEvent) => {
            if (evento.key === 'ArrowLeft') {
                setIzquierda((anterior) => Math.max(12.5, anterior - 2));
            }
            if (evento.key === 'ArrowRight') {
                setIzquierda((anterior) => Math.min(window.innerWidth / 16 - 12.5, anterior + 2));
            }
            if (evento.code === 'Space' && !disparando) {
                setBalaX(izquierda);
                setArriba(5);
                setDisparando(true);
            }
        };

        window.addEventListener('keydown', controlarJugador);
        return () => window.removeEventListener('keydown', controlarJugador);
    }, [disparando, izquierda]);
    useEffect(() => {
        if (!disparando) return;

        const movimiento = setInterval(() => {
            setArriba((anterior) => {
                if (anterior >= window.innerHeight / 16) {
                    setDisparando(false);
                    return 5;
                }
                return anterior + 2;
            });
        }, 50);
        return () => clearInterval(movimiento);
    }, [disparando]);

    useEffect(() => {
        const movimientoEnemigos = setInterval(() => {
            setExtraterrestre((listaAnt) => listaAnt.map((enemigo) => {
                if (enemigo.y >= window.innerHeight / 16) {
                    return crearEnemigo();
                }
                return {x: enemigo.x+Math.random()*5-3, y: enemigo.y + 1};
            }));
        }, 100);
        return () => clearInterval(movimientoEnemigos);
    }, [])
    return (
        
        <>
        <section className="arma" style={{left: `${izquierda}rem`}}>
        </section>
        {disparando && <section className='bala' style={{left:`${balaX}rem`, bottom: `${arriba}rem`}} />}
            {extraterrestre.map((item, index) => {
                return (
                    <section key={index} className='alien' style={{left: `${item.x}rem`, top: `${item.y}rem`}} />
                )
            })}
        </>
    )
}