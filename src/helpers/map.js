let currentCordX = 0
let currentCordY = 0

const getCoord = (isX, itemsPerRow) => {
  if (isX) {
    if (currentCordX / itemsPerRow === 1) {
      currentCordY += 1
      currentCordX = 1
      return currentCordX - 1
    } else {
      currentCordX += 1
      return currentCordX - 1
    }
  }

  if (!isX) {
    return currentCordY
  }
}

const generateContent = itemsPerRow => {
  if (currentCordX === 2 && currentCordY === 1) {
    return {
      type: 'village',
      name: 'Konoha',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReUgjT_6y7EIPKXhI22rZ1Qn_i8kpOCTuNWerz6K9zhRQOptT'
    }
  }

  if (currentCordX === 1 && currentCordY === 1) {
    return {
      type: 'enemy',
      name: 'Denka',
      image:
        'https://res.cloudinary.com/dbmnsavja/image/upload/v1566237351/Naruto%20Game/Characters/denka.png'
    }
  }
}

export const generateMap = (mapSize, itemsPerRow) => {
  currentCordX = 0
  currentCordY = 0

  return [...Array(mapSize)].map(() => ({
    coordX: getCoord(true, itemsPerRow),
    coordY: getCoord(false, itemsPerRow),
    content: generateContent(itemsPerRow)
  }))
}
