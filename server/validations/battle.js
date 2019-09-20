async function battleAction(action, delayedSkills) {
  // console.log(action, delayedSkills)

  const skillHasDelay = delayedSkills.find(x => +x.code === +action.code)
  if (skillHasDelay) {
    return 'Ação inválida, atualize a página!'
  }

  return
}

async function enterInBattle(character) {
  if (character.attributes.stamina < 1) {
    return 'Estamina insuficiente'
  }

  return
}

module.exports = {
  battleAction,
  enterInBattle
}
