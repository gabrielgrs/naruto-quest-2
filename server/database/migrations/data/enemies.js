const enemies = [...require('./enemies/single'), ...require('./enemies/story')]

const createData = (index, name, element, image, inStory) => ({
  code: index,
  name,
  image,
  level: index == 0 ? 1 : index * 2,
  attributes: {
    attack: index * 4,
    intelligence: index * 4,
    vitality: index * 4
  },
  inStory,
  element,
  exp: (index + 1) * 15,
  gold: index * 7
})

const generateEnemies = () =>
  enemies.map((item, index) =>
    createData(
      item.index || index,
      item.name,
      item.element,
      item.image,
      item.inStory || false
    )
  )

module.exports = {
  enemies: generateEnemies()
}
