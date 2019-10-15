async function battleAction(action, battle, isCharacterAction) {
  const { lastCharacterAction, lastOponentAction, delayedSkills } = battle

  if (!!lastCharacterAction && !!lastOponentAction) {
    if (lastCharacterAction > lastOponentAction && isCharacterAction) {
      return 'Você não pode jogar ainda'
    } else if (lastCharacterAction < lastOponentAction && !isCharacterAction) {
      return 'Você não pode jogar ainda'
    }
  }

  const idToVerify = isCharacterAction ? battle.character : battle.oponent
  const skillHasDelay = battle.delayedSkills.find(
    x =>
      +x.code === +action.code && String(x.characterId) === String(idToVerify)
  )

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
