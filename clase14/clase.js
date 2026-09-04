"use strict";
class celda {
    fila;
    columna;
    valor;
    constructor(fila, columna, valor) {
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
    }
}
const celda1 = new celda(1, 1, '123');
console.log(celda1);
