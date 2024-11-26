[⬅ Atras](https://github.com/jdtb4/halloweenDev)

## Reto #03 🛌 Escapa de la pesadilla de Freddy

<details>
<summary>Instrucciones</summary>
<br/>

Estás atrapado en una pesadilla en la que Freddy Krueger te persigue 😭. El sueño está representado por un laberinto de celdas, donde cada celda tiene un valor numérico que indica el nivel de peligro de esa parte del sueño.

Debes encontrar el camino más seguro (es decir, el que tenga el menor valor total de peligro) desde la esquina superior izquierda hasta la esquina inferior derecha de la matriz.

En este desafío, solo puedes moverte hacia la derecha o hacia abajo (no puedes retroceder ni moverte en diagonal) y debes calcular el nivel total de peligro del camino más seguro.

La pesadilla está representada por una matriz dream de tamaño n x m donde cada celda es un número positivo que representa el nivel de peligro de esa celda en el sueño.

Y tienes que devolver el valor total de peligro del camino más seguro de la esquina superior izquierda (posición [0][0]) a la esquina inferior derecha (posición [n-1][m-1]).

```js
const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]

const bestPath = findSafestPath(dream) // Devuelve 7
// El mejor camino es:
// [0, 0] -> 1
// [0, 1] -> 3
// [0, 2] -> 1
// [1, 2] -> 1
// [2, 2] -> 1

// 1 -> 3 -> 1 -> 1 -> 1 = 7
```

</details>

## Solución

```js
function findSafestPath(dream) {
  const rows = dream.length;
  const cols = dream[0].length;

  const dp = Array(cols).fill(Infinity);

  dp[0] = 0;

  for (let i = 0; i < rows; i++) {
    dp[0] += dream[i][0];
    for (let j = 1; j < cols; j++) {
      dp[j] = dream[i][j] + Math.min(dp[j], dp[j - 1]);
    }
  }
  return dp[cols - 1];
}
```

> Caramelos: 🍬 340

<br/>
