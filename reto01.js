const potions = [1, 2, 3, 4];
const goal = 6;

function createMagicPotion(potions, target) {
  const mapPower = new Map();

  for (const [index, potion] of potions.entries()) {
    const neededPower = target - potion;

    if (mapPower.has(neededPower)) {
      return [mapPower.get(neededPower), index];
    }

    mapPower.set(potion, index);
  }
}

console.log(createMagicPotion(potions, goal));
