const effectTypes = {
  HEALER: 'healer',
  DAMAGER: 'damager'
}

const items = [
  {
    code: 0,
    name: 'Cupcake',
    manaRecovery: 10,
    lifeRecovery: 0,
    price: 40,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224522/Naruto%20Game/items/cupcake-2.svg'
  },
  {
    code: 1,
    name: 'Pirulito',
    manaRecovery: 15,
    lifeRecovery: 0,
    price: 50,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224530/Naruto%20Game/items/jawbreaker.svg'
  },
  {
    code: 2,
    name: 'Cachorro Quente',
    manaRecovery: 0,
    lifeRecovery: 10,
    price: 30,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224529/Naruto%20Game/items/hot-dog.svg'
  },
  {
    code: 3,
    name: 'Hamburguer',
    manaRecovery: 0,
    lifeRecovery: 20,
    price: 40,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224527/Naruto%20Game/items/hamburguer.svg'
  },
  {
    code: 4,
    name: 'Sorvete',
    manaRecovery: 20,
    lifeRecovery: 0,
    price: 30,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224529/Naruto%20Game/items/ice-cream-6.svg'
  },
  {
    code: 5,
    name: 'Carne',
    manaRecovery: 0,
    lifeRecovery: 40,
    price: 50,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224533/Naruto%20Game/items/meat-1.svg'
  },
  {
    code: 6,
    name: 'Bacon',
    manaRecovery: 0,
    lifeRecovery: 45,
    price: 55,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224509/Naruto%20Game/items/bacon.svg'
  },
  {
    code: 7,
    name: 'Sushi',
    manaRecovery: 30,
    lifeRecovery: 50,
    price: 60,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224506/Naruto%20Game/items/sushi-2.svg'
  },
  {
    code: 8,
    name: 'Pizza',
    manaRecovery: 0,
    lifeRecovery: 60,
    price: 70,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224503/Naruto%20Game/items/pizza.svg'
  },
  {
    code: 9,
    name: 'Octopus',
    manaRecovery: 40,
    lifeRecovery: 50,
    price: 80,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566224540/Naruto%20Game/items/octopus.svg'
  }
]

module.exports = {
  items
}
