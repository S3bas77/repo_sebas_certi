# Snakes

Juego de la serpiente hecho con React + TypeScript + Vite. El movimiento de la serpiente se controla con el teclado (no es automático).

## Requisitos

- Node.js (versión 18 o superior)
- npm

## Instalación

```bash
npm install
```

## Ejecución (modo desarrollo)

```bash
npm run dev
```

Luego abrí la URL que muestra la terminal (por defecto http://localhost:5173).

## Compilar para producción

```bash
npm run build
```

## Verificar tipos y lint

```bash
npx tsc -b --noEmit
npm run lint
```

## Controles

| Tecla       | Acción         |
| ----------- | -------------- |
| ArrowUp     | Moverse arriba |
| ArrowDown   | Moverse abajo  |
| ArrowLeft   | Moverse izquierda |
| ArrowRight  | Moverse derecha |

Nota: la tabla debe tener foco. Hacé clic sobre el tablero antes de usar las flechas.

## Reglas

- La serpiente inicia con 3 segmentos (cabeza azul y cuerpo).
- La comida (🔸) aparece en una sola casilla al azar.
- Al comer, la serpiente crece y la comida aparece en otra casilla.
- Si la cabeza choca con los bordes, el borde se pone rojo y el juego se reinicia.