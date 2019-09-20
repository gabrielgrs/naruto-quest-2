const levelsToChangeJob = {
  firstJobLevel: 10,
  secondJobLevel: 50
}

// const jobRanks = {
//   NOVICE: 'novice',
//   FIRST: 'first',
//   SECOND: 'second'
// }

const list = [
  {
    name: 'Naruto',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Naruto.png'
  },
  {
    name: 'Sasuke',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Sasuke.png'
  },
  {
    name: 'Sakura',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Sakura.png'
  },
  {
    name: 'Kakashi',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029053/Naruto%20Game/Characters/v1/Kakashi.png'
  },
  {
    name: 'Shikamaru',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Shikamaru.png'
  },
  {
    name: 'Ino',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029053/Naruto%20Game/Characters/v1/Ino.png'
  },
  {
    name: 'Sai',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Sai.png'
  },
  {
    name: 'Yamato',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029058/Naruto%20Game/Characters/v1/Yamato.png'
  },
  {
    name: 'Chouji',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029051/Naruto%20Game/Characters/v1/Chouji.png'
  },
  {
    name: 'Kiba',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029054/Naruto%20Game/Characters/v1/Kiba.png'
  },
  {
    name: 'Lee',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029055/Naruto%20Game/Characters/v1/Lee.png'
  },
  {
    name: 'Hinata',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029052/Naruto%20Game/Characters/v1/Hinata.png'
  },
  {
    name: 'Hanabi',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029052/Naruto%20Game/Characters/v1/Hanabi.png'
  },
  {
    name: 'Guy',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029052/Naruto%20Game/Characters/v1/Guy.png'
  },
  {
    name: 'Neji',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Neji.png'
  },
  {
    name: 'Gaara',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029051/Naruto%20Game/Characters/v1/Gaara.png'
  },
  {
    name: 'Kankurou',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029054/Naruto%20Game/Characters/v1/Kankurou.png'
  },
  {
    name: 'Temari',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029057/Naruto%20Game/Characters/v1/Temari.png'
  },
  {
    name: 'Tenten',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029057/Naruto%20Game/Characters/v1/Tenten.png'
  },
  {
    name: 'Shino',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029057/Naruto%20Game/Characters/v1/Shino.png'
  },
  {
    name: 'Kabuto',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029054/Naruto%20Game/Characters/v1/Kabuto.png'
  },
  {
    name: 'Minato',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029055/Naruto%20Game/Characters/v1/Minato.png'
  },
  {
    name: 'Madara',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029055/Naruto%20Game/Characters/v1/Madara.png'
  },
  {
    name: 'Tsunade',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029057/Naruto%20Game/Characters/v1/Tsunade.png'
  },

  {
    name: 'Jiraya',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029053/Naruto%20Game/Characters/v1/Jiraya.png'
  },
  {
    name: 'Orochimaru',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Orochimaru.png'
  },
  {
    name: 'Tayuya',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029057/Naruto%20Game/Characters/v1/Tayuya.png'
  },
  {
    name: 'Kidoumaru',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029054/Naruto%20Game/Characters/v1/Kidoumaru.png'
  },
  {
    name: 'Jirobo',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029053/Naruto%20Game/Characters/v1/Jirobou.png'
  },
  // {
  //   name: 'Sakon/Ukon',
  //   image: ''
  // },
  {
    name: 'Kimimaro',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029054/Naruto%20Game/Characters/v1/Kimimaro.png'
  },
  {
    name: 'Zabuza',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029058/Naruto%20Game/Characters/v1/Zabuza.png'
  },
  {
    name: 'Haku',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029052/Naruto%20Game/Characters/v1/Haku.png'
  },
  {
    name: 'Chiyo',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029051/Naruto%20Game/Characters/v1/Chiyo.png'
  },
  {
    name: 'Sasori',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Sasori.png'
  },
  {
    name: 'Deidara',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029052/Naruto%20Game/Characters/v1/Deidara.png'
  },
  {
    name: 'Itachi',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029053/Naruto%20Game/Characters/v1/Itachi.png'
  },
  {
    name: 'Zetsu',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029051/Naruto%20Game/Characters/v1/BZetsu.png'
  },
  {
    name: 'Hidan',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029052/Naruto%20Game/Characters/v1/Hidan.png'
  },
  {
    name: 'Konan',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029055/Naruto%20Game/Characters/v1/Konan.png'
  },
  {
    name: 'Kisame',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029055/Naruto%20Game/Characters/v1/Kisame.png'
  },
  {
    name: 'Kazuku',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029054/Naruto%20Game/Characters/v1/Kakuzo.png'
  },
  {
    name: 'Obito',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029056/Naruto%20Game/Characters/v1/Obito.png'
  },
  {
    name: 'Juugo',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029053/Naruto%20Game/Characters/v1/Juugo.png'
  },

  {
    name: 'Karin',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029054/Naruto%20Game/Characters/v1/Karin.png'
  },

  {
    name: 'Suigetsu',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029057/Naruto%20Game/Characters/v1/Suigetsu.png'
  },

  {
    name: 'Iruka',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029053/Naruto%20Game/Characters/v1/Iruka.png'
  },

  {
    name: 'Kurenai',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029055/Naruto%20Game/Characters/v1/Kurenai.png'
  },

  {
    name: 'Konohamaru',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029055/Naruto%20Game/Characters/v1/Konohamaru.png'
  },
  {
    name: 'Hashirama',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029052/Naruto%20Game/Characters/v1/Hashirama.png'
  },

  {
    name: 'Tobirama',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029057/Naruto%20Game/Characters/v1/Tobirama.png'
  },

  {
    name: 'Danzou',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029051/Naruto%20Game/Characters/v1/Danzou.png'
  },
  {
    image: 'Killer Bee',
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1567029054/Naruto%20Game/Characters/v1/Killer_Bee.png'
  }
]

const jobs = list.map((job, code) => ({
  code,
  name: job.name,
  image: job.image
}))

module.exports = {
  jobs,
  levelsToChangeJob
}
