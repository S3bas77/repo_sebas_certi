import Contador from "./Contador";

export default function EjemploLlaves(){
    const sumar = (a:number, b:number):number => { return a + b};
    const mensaje:string = "Hola UPBinos";
    const suma:number = 3+4;
    return (
        <section>
            <h1>
                {mensaje}
            </h1>
            <p>
                3+4 = {suma}
            </p>
            <p>
                la suma total es: {sumar(7,20)}
            </p>
            <Contador />
        </section>
    )
}