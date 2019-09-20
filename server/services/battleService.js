const getDamageByStyle = (style, { attack, intelligence, vitality }) => {
  if (style === 'taijutsu') return attack

  if (style === 'ninjutsu') return intelligence

  if (style === 'genjutsu') return vitality
}

// TODO: tornar genérico para quando for ataque do inimigo
const getDamageByElement = (strikerElement, defenderElement) => {
  // Elements by superiority
  const elements = ['fire', 'wind', 'lightning', 'earth', 'water']

  const baseMultiplier = 1
  const elementaIncrease = 1.2
  const elementalDecrease = 1.2

  if (strikerElement === 'neutral' || defenderElement === 'neutral')
    return baseMultiplier

  const indexOfStrikerElement = elements.indexOf(strikerElement)
  const indexOfDefenderElement = elements.indexOf(defenderElement)

  if (
    indexOfStrikerElement === indexOfDefenderElement - 1 ||
    (indexOfStrikerElement === elements.length - 1 &&
      indexOfDefenderElement === 0)
  ) {
    return elementaIncrease
  }

  if (
    indexOfStrikerElement === indexOfDefenderElement + 1 ||
    (indexOfDefenderElement === elements.length - 1 &&
      indexOfStrikerElement === 0)
  ) {
    return elementalDecrease
  }

  return baseMultiplier
}

const getEquipmentAttack = ({ weapon }) => (weapon ? weapon.value : 0)

const getEquipmentDefense = ({ head, trunk, arms, legs }) => {
  let accumulator = 0

  if (!!head) {
    accumulator += head.value
  }

  if (!!arms) {
    accumulator += arms.value
  }

  if (!!trunk) {
    accumulator += trunk.value
  }

  if (!!legs) {
    accumulator += legs.value
  }

  return accumulator
}

const getCharacterDamage = (action, character, enemy) => {
  const damageByStyle = getDamageByStyle(action.style, character.attributes)
  const damageByElement = getDamageByElement(action.element, enemy.element)

  const equipmentDamage = getEquipmentAttack(character.bodyEquipments)

  // const characterDamage = (action.value + damageByStyle) * damageByElement
  const characterDamage =
    (action.value +
      equipmentDamage +
      damageByStyle -
      enemy.attributes.vitality) *
    damageByElement

  return characterDamage < 0 ? 0 : characterDamage
}

const getEnemyDamage = (characterAction, character, enemy) => {
  const equipmentDefense = getEquipmentDefense(character.bodyEquipments)

  const characterDefenseBase = character.attributes.vitality + equipmentDefense

  const characterDefense =
    characterAction.type === 'evasion'
      ? characterDefenseBase + characterAction.value
      : characterDefenseBase

  // TODO: Remover o OR
  const elementMultiplier = getDamageByElement(
    enemy.element || 'neutral',
    character.element || 'neutral'
  )
  const enemyAttack = enemy.attributes.attack * elementMultiplier

  return enemyAttack < characterDefense ? 0 : enemyAttack - characterDefense
}

const recoverCharacterHp = ({ lifeRecovery }, { attributes, stats }) => {
  const recoveredLife = lifeRecovery
    ? attributes.life + lifeRecovery
    : attributes.life
  return recoveredLife > stats.maxLife ? stats.maxLife : recoveredLife
}

const getValueWithVariation = value => {
  const valueWithPercentage = value * 0.1
  const min = Math.ceil(value - valueWithPercentage)
  const max = Math.ceil(value + valueWithPercentage)
  return Math.floor(Math.random() * (+max - +min)) + +min
}

async function battleAction(character, battle, action) {
  const actionTypeIsDamager = action.type === 'damager'

  // Initial Status
  let characterLife = character.attributes.life
  let characterMana = character.attributes.mana
  let enemyLife = battle.currentEnemyLife
  let expReceived = 0
  let firstDescription = ''
  let secondDescription = ''
  let goldToReceive = 0

  const characterDamage = getValueWithVariation(
    getCharacterDamage(action, character, battle.enemy)
  )
  const enemyDamage = getValueWithVariation(
    getEnemyDamage(action, character, battle.enemy)
  )

  if (actionTypeIsDamager) {
    enemyLife = enemyLife - characterDamage
    firstDescription = `Você causou ${characterDamage} dano no inimigo`
  } else {
    characterLife = recoverCharacterHp(action, character)
    firstDescription = `Você recuperou ${action.lifeRecovery} da sua vida`
    // Verify if is item
  }

  characterMana = action.cost ? characterMana - action.cost : characterMana

  characterLife = characterLife - enemyDamage
  secondDescription = `Você recebeu ${enemyDamage} de dano`

  let log = [
    {
      actionType: actionTypeIsDamager ? action.type : 'recovery',
      description: firstDescription,
      who: character._id
    },
    {
      actionType: 'damager',
      description: secondDescription,
      who: battle.enemy._id
    }
  ]

  if (enemyLife < 1) {
    expReceived = battle.enemy.exp
    goldToReceive = battle.enemy.gold
    log.push({
      actionType: 'death',
      description: 'Monstro morreu',
      who: battle.enemy._id
    })
  }

  if (characterLife < 1) {
    characterLife = 0
    log.push({
      actionType: 'death',
      description: 'Você morreu',
      who: character._id
    })
  }

  const data = {
    characterDamage,
    enemyDamage,
    expReceived,
    characterLife,
    characterMana,
    enemyLife,
    goldToReceive,
    log
  }

  return data
}

module.exports = {
  battleAction
}
