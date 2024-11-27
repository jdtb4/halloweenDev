[⬅ Atras](https://github.com/jdtb4/halloweenDev)

## Reto #05 🛌 Terror en Silent Hill

<details>
<summary>Instrucciones</summary>
<br/>

Estás atrapado en Silent Hill, en una habitación cuadrada de tamaño n x n y el temido Pyramid Head (▲) está en algún lugar de la habitación, moviéndose hacia ti (T).

Tú no puedes moverte, y Pyramid Head se mueve una celda por turno, en cualquiera de las cuatro direcciones cardinales (arriba, abajo, izquierda, derecha), pero siempre elige el camino más corto hacia tu posición. Tu objetivo es determinar si Pyramid Head puede alcanzarte.

La habitación está representada por una matriz n x n:

- T: tu posición (donde te encuentras atrapado).
- ▲: la posición inicial de Pyramid Head.
- .: espacios vacíos donde Pyramid Head puede moverse.
- #: paredes que Pyramid Head no puede atravesar.

Escribe una función que determine si Pyramid Head podrá alcanzarte. Si Pyramid Head puede alcanzarte, devuelve el número de pasos con lo que lo puede lograr, si no puede alcanzarte entonces devuelve -1.

```js
const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.'],
]

escapePyramidHead(room) // -> 8

const room2 = [
  ['T', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['▲', '.', '.', '#'],
  ['.', '#', '#', '#'],
]

escapePyramidHead(room2) // -> 2

const room3 = [
  ['#', '#', '#'],
  ['▲', '.', '#'],
  ['.', '#', 'T'],
]

escapePyramidHead(room3) // -> -1
```

</details>

## Solución

```js
function escapePyramidHead(room) {
    const n = room.length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue = [];
    const visited = new Set();
    let steps = 0;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (room[i][j] === '▲') {
          queue.push([i, j]);
          visited.add(`${i}-${j}`);
        }
      }
    }
  
    while (queue.length) {
      const size = queue.length;
  
      for (let i = 0; i < size; i++) {
        const [x, y] = queue.shift();
  
        if (room[x][y] === 'T') return steps;
  
        for (const [dx, dy] of directions) {
          let nx = x + dx;
          let ny = y + dy;
  
          if (nx < 0 || nx >= n || ny < 0 || ny >= n || room[nx][ny] === '#' || visited.has(`${nx}-${ny}`)) continue;
  
          queue.push([nx, ny]);
          visited.add(`${nx}-${ny}`);
        }
      }
  
      steps++;
    }
  
    return -1;
  }
```

> Caramelos: 🍬 130

<br/>