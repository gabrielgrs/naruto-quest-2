export const villages = [
  {
    id: 0,
    label: 'Folha',
    name: 'Leaf',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567526549/Naruto%20Game/villages/Leaf.png'
  },
  {
    id: 1,
    label: 'Areia',
    name: 'Sand',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567526549/Naruto%20Game/villages/Sand.png'
  },
  {
    id: 2,
    label: 'Pedra',
    name: 'Rock',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567526549/Naruto%20Game/villages/Rock.png'
  },
  {
    id: 3,
    label: 'Névoa',
    name: 'Mist',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567526549/Naruto%20Game/villages/Mist.png'
  },
  {
    id: 4,
    label: 'Núvem',
    name: 'Cloud',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567526549/Naruto%20Game/villages/Cloud.png'
  },
  {
    id: 5,
    label: 'Som',
    name: 'Sound',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567526549/Naruto%20Game/villages/Sound.png'
  }
]

export const getVillage = name => {
  return villages.find(x => x.name === name) || { label: 'N/A' }
}
