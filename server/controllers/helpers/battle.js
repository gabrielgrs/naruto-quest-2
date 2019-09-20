const getDelayedSkills = (delayedSkills, currentAction) => {
  if (!delayedSkills && !currentAction.price)
    return { code: +currentAction.code, delay: +currentAction.delay }

  const hasItem = !!delayedSkills.find(x => +x.code === +currentAction.code)

  let cleanedArray = []
  delayedSkills.forEach(x => {
    if (x.delay > 1) {
      return cleanedArray.push({ delay: x.delay - 1, code: x.code })
    }
  })

  if (!hasItem && !currentAction.price) {
    return [
      ...(cleanedArray || []),
      { code: +currentAction.code, delay: +currentAction.delay }
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
