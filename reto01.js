const zombies = [2, 4, 2];
const humans = [3, 3, 4];

function battleHorde(zombies, humans) {
  let zombiesPower = 0;
  let humansPower = 0;

  for (let i = 0; i < zombies.length; i++) {
    const z = Number(zombies[i]);
    const h = Number(humans[i]);

    const difference = z + zombiesPower - (h + humansPower);
    if (difference > 0) {
      zombiesPower = difference;
      humansPower = 0;
    } else if (difference < 0) {
      humansPower = -difference;
      zombiesPower = 0;
    } else {
      zombiesPower = 0;
      humansPower = 0;
    }
  }
  return zombiesPower > humansPower
    ? `${zombiesPower}z`
    : humansPower > zombiesPower
    ? `${humansPower}h`
    : "x";
}

console.log(battleHorde(zombies, humans));
