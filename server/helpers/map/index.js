const enemyRepository = require('../../repositories/enemy')

const villages = [
  {
    name: 'Leaf',
    coordinate: {
      x: 1,
      y: 0
    }
  },
  {
    name: 'Cloud',
    coordinate: {
      x: 2,
      y: 0
    }
  },
  {
    name: 'Mist',
    coordinate: {
      x: 3,
      y: 0
    }
  },
  {
    name: 'Rock',
    coordinate: {
      x: 0,
      y: 1
    }
  },
  {
    name: 'Sand',
    coordinate: {
      x: 0,
      y: 2
    }
  },
  {
    name: 'Sound',
    coordinate: {
      x: 0,
      y: 3
    }
  }
]

const generateMap = mapSize => {
  let currentCordX = 0
  let currentCordY = 0
  const itemsPerRow = Math.sqrt(mapSize)

  const map = [...Array(mapSize)].map(async (item, index) => {
    if (index === 0) {
      return {
        coordinate: {
          x: currentCordX,
          y: currentCordY
        }
      }
    }

    if (index % itemsPerRow === 0) {
      currentCordY += 1
      currentCordX = 0
    } else {
      currentCordX += 1
      currentCordY += 0
    }

    return {
      coordinate: {
        x: currentCordX,
        y: currentCordY
      }
    }
  })

  return Promise.all(map)
}

const createRelativeMap = (characterCoordinate, map) => {
  const emptyPart = { coordinate: { x: undefined, y: undefined } }
  const getMapPart = (x, y) => {
    const current = map.find(
      ({ coordinate }) => coordinate.x === x && coordinate.y === y
    )

    return current || emptyPart
  }
  const parts = new Array()

  // parts[0] = map.find()
  parts[0] = getMapPart(characterCoordinate.x - 1, characterCoordinate.y - 1)
  parts[1] = getMapPart(characterCoordinate.x, characterCoordinate.y - 1)
  parts[2] = getMapPart(characterCoordinate.x + 1, characterCoordinate.y - 1)
  parts[3] = getMapPart(characterCoordinate.x - 1, characterCoordinate.y)
  parts[4] = getMapPart(characterCoordinate.x, characterCoordinate.y)
  parts[5] = getMapPart(characterCoordinate.x + 1, characterCoordinate.y)
  parts[6] = getMapPart(characterCoordinate.x - 1, characterCoordinate.y + 1)
  parts[7] = getMapPart(characterCoordinate.x, characterCoordinate.y + 1)
  parts[8] = getMapPart(characterCoordinate.x + 1, characterCoordinate.y + 1)

  return parts
}

const getDistance = (a, b) => {
  const { x: aX, y: aY } = a
  const { x: bX, y: bY } = b

  if (aX === bX && aY === bY) return { x: 0, y: 0 }

  return { x: aX - bX, y: aY - bY }
}

const canGenerateMonster = probability => {
  return Math.floor(Math.random() * 100) + 1 < probability
}

const populateMap = async asyncMap => {
  const hasVillageNearby = (currentMapPoint, distanceToVerify) => {
    return villages.find(v => {
      const distance = getDistance(currentMapPoint, v.coordinate)
      const parsedX = distance.x < 0 ? distance.x * -1 : distance.x
      const parsedY = distance.y < 0 ? distance.y * -1 : distance.y

      return parsedX < distanceToVerify && parsedY < distanceToVerify
    })
  }
  const currentMap = await Promise.resolve(asyncMap)

  const arrayWithContent = Promise.all(
    currentMap.map(async ({ coordinate }, index) => {
      const village = villages.find(v => {
        return (
          v.coordinate.x === coordinate.x && v.coordinate.y === coordinate.y
        )
      })

      if (village) {
        return {
          coordinate,
          content: {
            type: 'village',
            data: { name: village.name }
          }
        }
      }

      // If 2 points in x and y, have 100 of change generate Monster
      const pointsOfDistance = Math.ceil(index / Math.sqrt(currentMap.length))
      if (
        hasVillageNearby(coordinate, pointsOfDistance) &&
        canGenerateMonster(80 - pointsOfDistance)
      ) {
        const currentEnemy = await enemyRepository.getByCode(
          pointsOfDistance - 1
        )
        return {
          coordinate,
          content: {
            type: 'enemy',
            data: currentEnemy
          }
        }
      }

      return { coordinate }
    })
  )

  return arrayWithContent
}

module.exports = {
  generateMap,
  createRelativeMap,
  getDistance,
  populateMap
}
