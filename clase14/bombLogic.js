const tablero = document.getElementById('tablero');
const filas = tablero.querySelectorAll('tr');

const matriz = [];

filas.forEach((tr, f) => {
    const celdas = tr.querySelectorAll('td');
    const filaArr = [];
    celdas.forEach((td, c) => {
        const contenido = td.textContent.trim();
        filaArr.push({
            elemento: td,
            contenidoOriginal: contenido,
            revelada: false
        });
        td.addEventListener('click', () => manejarClick(f, c));
    });
    matriz.push(filaArr);
});

function manejarClick(f, c) {
    const celda = matriz[f][c];
    if (celda.revelada) return;

    const original = celda.contenidoOriginal;

    if (original === '💣') {
        celda.elemento.textContent = '💥';
        celda.elemento.classList.add('exploto');
        celda.revelada = true;
        pintarParedesAlrededor(f, c);
    } else {
        celda.elemento.textContent = original;
        celda.elemento.classList.add('revelada');
        celda.revelada = true;
    }
}

function pintarParedesAlrededor(f, c) {
    const vecinos = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1],  [1, 0], [1, 1]
    ];

    vecinos.forEach(([df, dc]) => {
        const nf = f + df;
        const nc = c + dc;
        if (
            nf >= 0 && nf < matriz.length &&
            nc >= 0 && nc < matriz[0].length
        ) {
            const vecina = matriz[nf][nc];
            if (!vecina.revelada) {
                vecina.elemento.textContent = '❌';
                vecina.elemento.classList.add('pared-alrededor');
                vecina.revelada = true;
            }
        }
    });
}
