const getDelayedSkills = (character, delayedSkills, currentAction) => {
  if (!delayedSkills && !currentAction.price)
    return {
      characterId: character._id,
      code: +currentAction.code,
      delay: +currentAction.delay
    }

  const hasItem = !!delayedSkills.find(
    x => +x.code === +currentAction.code && x._id === character._id
  )

  let cleanedArray = []
  delayedSkills.forEach(x => {
    if (x.delay > 1 && x.characterId === character._id) {
      return cleanedArray.push({
        characterId: character._id,
        delay: x.delay - 1,
        code: x.code
      })
    }
  })

  if (!hasItem && !currentAction.price) {
    return [
      ...(cleanedArray || []),
      {
        characterId: character._id,
        code: +currentAction.code,
        delay: +currentAction.delay
      }
    ]
  }

  return cleanedArray || []
}

const getBattleMessage = (
  battleIsFinished,
  { characterLife, enemyLife },
  expWithBonus,
  goldWithBonus
) => {
  if (!battleIsFinished) return ''
  if (characterLife < 1) return 'Fim de batalha! Você perdeu!'
  if (enemyLife < 1)
    return `Fim de batalha! Você recebeu ${expWithBonus} de experiência! e ${goldWithBonus} de gold`
}

module.exports = {
  getDelayedSkills,
  getBattleMessage
}
