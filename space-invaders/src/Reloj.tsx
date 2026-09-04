import {useState, useEffect} from 'react'
export default function Reloj() {
    const noSe=0; 
    const[segundos, setSegundos] = useState<number>(0)
    useEffect(()=>{
        const reloj: number = setInterval(() => {
            setSegundos((anterior) => {
                return anterior + 1
            })
        }, 1000);
        return () => clearInterval(reloj);
    }, [noSe])
    return (
        <>
        <p> segundos: {segundos}</p>
        </>
    )
}