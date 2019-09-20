const characterRepository = require('../repositories/character')

async function userHasCredits(credits, cost) {
  const currentCredits = credits || 0
  if (cost > currentCredits) {
    return 'Créditos inválidos'
  }

  return
}

async function canUseName(name) {
  // Validate length
  if (name.length < 3 || name.length > 12) {
    return 'Nome deve ter entre 3 e 12 caracteres'
  }

  // Validate existance
  const foundItem = await characterRepository.getByName(name)
  if (!!foundItem.length) {
    return `${name} ja está em uso`
  }

  return
}

async function villageIsValid(village) {
  const villages = ['Leaf', 'Sand', 'Rock', 'Mist', 'Cloud', 'Sound']

  if (!villages.includes(village)) {
    return `${village} é uma vila inválida`
  }

  return
}

module.exports = {
  userHasCredits,
  canUseName,
  villageIsValid
}
