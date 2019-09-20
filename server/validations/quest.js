async function enterInQuest(character, cost) {
  if (character.attributes.stamina < cost) {
    return 'Estamina insuficiente'
  }

  return
}

module.exports = {
  enterInQuest
}
