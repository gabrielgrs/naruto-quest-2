export const elements = [
  {
    value: 'fire',
    name: 'Katon',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566406688/Naruto%20Game/elements/Katon.png'
  },
  {
    value: 'wind',
    name: 'Fuuton',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566406688/Naruto%20Game/elements/Fuuton.png'
  },
  {
    value: 'earth',
    name: 'Doton',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566406688/Naruto%20Game/elements/Doton.png'
  },
  {
    value: 'lightning',
    name: 'Raiton',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566406688/Naruto%20Game/elements/Raiton.png'
  },
  {
    value: 'water',
    name: 'Suiton',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566406688/Naruto%20Game/elements/Suiton.png'
  }
]

export const getRankingLabel = ninjaRank => {
  // 'Student', 'Genin', 'Chuunin', 'Jounin', 'ANBU', 'Sannin'
  return {
    Student: 'Estudante',
    Genin: 'Genin',
    Chuunin: 'Chuunin',
    Jounin: 'Joujin',
    ANBU: 'Anbu',
    Sannin: 'Sannin'
  }[ninjaRank]
}
