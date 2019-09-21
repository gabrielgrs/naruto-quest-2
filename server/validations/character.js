const repository = require('../repositories/character')
const rules = require('../config/rules')

async function insert({ name, attributes }) {
  if (name.length < 3 || name.length > 12) {
    return 'Nome deve ter entre 3 e 12 caracteres'
  }

  // Duplicate name
  const characterWithSameName = await repository.getByName(name)
  if (characterWithSameName.length) {
    return 'Nome já utilizado'
  }

  // Max Attributes
  const { attack, intelligence, vitality } = attributes
  const totalPoints = attack + intelligence + vitality
  if (totalPoints > rules.maxAttributePoints) {
    return `Total de pontos maior que ${rules.maxAttributePoints}`
  }

  return
}

async function setAttributes(currentAttributes, level) {
  // First level dont have attributes
  const normalizedLevel = level - 1

  // Max Attributes
  const { attack, intelligence, vitality } = currentAttributes
  const totalPoints = attack + intelligence + vitality
  const maxCanHave =
    normalizedLevel * rules.attributesPointsPerLevel + rules.maxAttributePoints

  if (totalPoints >= maxCanHave) {
    return `Ação inválida, atualize a página`
  }

  return
}

async function learnSkill(currentSkills, level) {
  // You start with 2 skills
  const normalizedCurrentSkills = currentSkills.length - 2
  const skillsCanLearn = Math.trunc(level / rules.levelQuantityToGetSkillPoint)

  if (normalizedCurrentSkills >= skillsCanLearn) {
    return 'Ação inválida, atualize a página'
  }

  return
}

async function moveCharacter(x, y, { attributes }) {
  if (attributes.stamina < 1) {
    return 'Estamina insuficiente'
  }

  const enableMoviments = [-1, 0, 1]

  if (!enableMoviments.includes(x) || !enableMoviments.includes(y)) {
    return 'Ação inválida, atualize a página'
  }

  return
}

module.exports = {
  insert,
  setAttributes,
  learnSkill,
  moveCharacter
}
