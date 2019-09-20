const { styles, types, elements, ninjaRanks } = require('./jutsus/helpers')

const list = [
  {
    code: 0,
    name: 'Soco',
    style: styles.TAIJUTSU,
    type: types.DAMAGER,
    value: 10,
    cost: 0,
    delay: 1,
    ranking: 'E',
    element: elements.NEUTRAL,
    requiredLevel: 1,
    requiredNinjaRank: ninjaRanks.STUDENT,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566235213/Naruto%20Game/Jutsus/Punch.png',
    conditionToUse: [],
    skillsRequireds: []
  },
  {
    code: 1,
    name: 'Chute',
    style: styles.TAIJUTSU,
    type: types.DAMAGER,
    value: 10,
    cost: 0,
    delay: 1,
    ranking: 'E',
    element: elements.NEUTRAL,
    requiredLevel: 1,
    requiredNinjaRank: ninjaRanks.STUDENT,
    image:
      'https://res.cloudinary.com/dbmnsavja/image/upload/v1566235213/Naruto%20Game/Jutsus/Kick.png',
    conditionToUse: [],
    skillsRequireds: []
  },
  ...require('./jutsus/rankD'),
  ...require('./jutsus/rankC')
]

const generateSkills = () => {
  return list.map((jutsu, index) => {
    return {
      code: jutsu.code || index,
      ...jutsu
    }
  })
}

const skills = generateSkills()

//

module.exports = {
  skills
}
