const faker = require('faker')

const baseImage =
  'https://vignette.wikia.nocookie.net/naruto/images/8/88/Mission_Desk.png/revision/latest?cb=20160117140452'

const list = [...require('./quests/simple'), ...require('./quests/graduation')]

const generateQuests = () =>
  list.map((q, index) => ({
    code: index,
    name: q.name || faker.name.jobTitle(),
    duration: q.duration || index + 1,
    gold: (index + 1) * 20,
    exp: (index + 1) * 70,
    requiredLevel: q.requiredLevel || index * 2,
    ranking: q.ranking,
    image: q.image || baseImage,
    needTeam: q.needTeam || false,
    advanceToRank: q.advanceToRank
  }))

const quests = generateQuests()

module.exports = {
  quests
}
