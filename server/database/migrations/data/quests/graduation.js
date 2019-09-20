const { rankings } = require('./helpers')
const { ninjaRankRequiredLevel } = require('../../../../config/rules')

module.exports = [
  {
    name: 'Exame Genin',
    duration: 10,
    requiredLevel: ninjaRankRequiredLevel.genin,
    ranking: rankings.D
  },
  {
    name: 'Exame Chuunin',
    duration: 15,
    requiredLevel: ninjaRankRequiredLevel.chuunin,
    ranking: rankings.C
  },
  {
    name: 'Exame Jounin',
    duration: 20,
    requiredLevel: ninjaRankRequiredLevel.jounin,
    ranking: rankings.B
  }
]
