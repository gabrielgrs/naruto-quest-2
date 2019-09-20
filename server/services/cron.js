const nodeCron = require('node-cron')
const characterRepository = require('../repositories/character')

async function recoveryStats() {
  const allCharacters = await characterRepository.getAll()
  allCharacters.map(async ({ _id, attributes, stats }) => {
    if (attributes.stamina < stats.maxStamina) {
      await characterRepository.updateStamina(_id, 1)
    }
    if (attributes.life === 0) {
      await characterRepository.updateLifeAndMana(_id, 30, 0)
    }
  })
}

function executeCron() {
  nodeCron.schedule('0 */10 * * * *', () => {
    recoveryStats()
  })
}

module.exports = {
  executeCron
}
