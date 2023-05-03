export function generateRandomItems(items, limit, positionFunc) {
  const shuffledItems = items.sort(() => 0.5 - Math.random());
  const selectedItems = shuffledItems.slice(0, limit);

  return selectedItems.map((item, i) => ({
    id: i.toString(),
    className: item,
    isDragging: false,
    ...positionFunc(item, i),
  }));
}

export function generateParty() {
  const classes = ['fighter', 'barbarian', 'wizard'];

  const positionFunc = () => {
    const gap = 100;
    const startingX = window.innerWidth / 2 - (classes.length * gap) / 2;

    return (className, i) => ({
      x: startingX + i * gap,
      y: window.innerHeight / 2,
    });
  };

  return generateRandomItems(classes, 3, positionFunc());
}

export function generateMonsters() {
  const monsters = ['goblin', 'skeleton', 'dragon'];

  const positionFunc = () => {
    const mapWidth = window.innerWidth;
    const mapHeight = window.innerHeight;
    const centerX = mapWidth / 2;
    const centerY = mapHeight / 2;
    const exclusionRadius = 200;

    function isOutsideExclusionZone(x, y) {
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      return distance > exclusionRadius;
    }

    return (monsterName, i) => {
      let monsterX, monsterY;

      do {
        monsterX =
          Math.floor(Math.random() * (mapWidth * 0.8 - mapWidth * 0.2)) +
          mapWidth * 0.2;
        monsterY =
          Math.floor(Math.random() * (mapHeight * 0.8 - mapHeight * 0.2)) +
          mapHeight * 0.2;
      } while (!isOutsideExclusionZone(monsterX, monsterY));

      return { x: monsterX, y: monsterY };
    };
  };

  return generateRandomItems(monsters, 3, positionFunc());
}

export function generateStructures() {
  const structures = ['obelisk', 'tower', 'house'];

  const positionFunc = () => {
    const mapWidth = window.innerWidth;
    const mapHeight = window.innerHeight;
    const centerX = mapWidth / 2;
    const centerY = mapHeight / 2;
    const exclusionRadius = 200;

    function isOutsideExclusionZone(x, y) {
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      return distance > exclusionRadius;
    }

    return (structureName, i) => {
      let structureX, structureY;

      do {
        structureX =
          Math.floor(Math.random() * (mapWidth * 0.8 - mapWidth * 0.2)) +
          mapWidth * 0.2;
        structureY =
          Math.floor(Math.random() * (mapHeight * 0.8 - mapHeight * 0.2)) +
          mapHeight * 0.2;
      } while (!isOutsideExclusionZone(structureX, structureY));

      return { x: structureX, y: structureY };
    };
  };

  return generateRandomItems(structures, 3, positionFunc());
}
