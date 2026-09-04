import type { SaludoProps } from "./interfaces/clase20";


export default function Renderizado(props: SaludoProps) {
    return (
        <div>
            <p>
                Hola {props.nombre} 
            </p>
        </div>
    );
}