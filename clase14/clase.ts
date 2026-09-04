class celda {
    fila:number; 
    columna:number;
    valor:string; 
    constructor(fila:number, columna:number, valor:string) {
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
    }
}

const celda1 = new celda(1, 1, '123');
console.log(celda1);
