const repository = require('../repositories/battle')
const enemyRepository = require('../repositories/enemy')
const userRepository = require('../repositories/user')
const characterRepository = require('../repositories/character')
const battleService = require('../services/battleService')
const battleValidator = require('../validations/battle')
const { getBattleMessage, getDelayedSkills } = require('./helpers/battle')
const { levels, getExpBonus, getGoldWithBonus } = require('../helpers')

// const logTypes = {
//   ATTACK: 'attack',
//   USE_SKILL: 'useSkill'
// }

async function enterInBattle(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const errorMessage = await battleValidator.enterInBattle(selectedCharacter)

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }

    const { enemyId } = req.body

    const { attributes } = await enemyRepository.getById(req.body.enemyId)

    const data = await repository.insert({
      character: selectedCharacter._id,
      enemy: enemyId,
      currentEnemyLife: attributes.vitality * 10,
      lastCharacterAction: Date.now()
    })

    await characterRepository.enterInBattle(selectedCharacter._id, data._id)

    await characterRepository.updateStamina(selectedCharacter._id, -1)

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function battleAction(req, res) {
  try {
    const { battleId } = req.params
    const { action } = req.body

    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const selectedBattle = await repository.getById(battleId)

    const errorMessage = await battleValidator.battleAction(
      req.body.action,
      selectedBattle.delayedSkills
    )

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }

    const isPvp = !!selectedBattle.oponent

    const oponentId =
      selectedBattle.character === selectedCharacter._id
        ? selectedBattle.oponent
        : selectedBattle.character

    const oponent = isPvp
      ? await characterRepository.getById(oponentId)
      : undefined

    const battleResolver = isPvp
      ? await battleService.pvpBattleAction(selectedCharacter, oponent, action)
      : await battleService.battleAction(
          selectedCharacter,
          selectedBattle,
          action
        )

    const delayedSkills = getDelayedSkills(
      selectedCharacter,
      selectedBattle.delayedSkills,
      req.body.action
    )

    if (isPvp) {
      await repository.update(battleId, {
        log: battleResolver.log,
        delayedSkills
      })
      // UPDATE OPONENT ATTRIBUTES
      await characterRepository.updateUserAttributes(
        oponent._id,
        battleResolver.enemyLife,
        battleResolver.characterMana
      )
    } else {
      await repository.update(battleId, {
        enemy: selectedBattle.enemy,
        currentEnemyLife: battleResolver.enemyLife,
        log: battleResolver.log,
        delayedSkills
      })
    }

    await characterRepository.updateUserAttributes(
      selectedCharacter._id,
      battleResolver.characterLife,
      battleResolver.characterMana
    )

    // Is item
    if (action.price) {
      await characterRepository.useItem(selectedCharacter._id, action._id)
    }

    const battleIsFinished =
      battleResolver.enemyLife < 1 || battleResolver.characterLife < 1

    const expWithBonus = getExpBonus(battleResolver.expReceived)
    const goldWithBonus = getGoldWithBonus(battleResolver.goldToReceive)

    if (battleIsFinished) {
      if (battleResolver.enemyLife < 1) {
        const expToNextBaseLevel = levels[selectedCharacter.level + 1].exp.base
        const expAfterBattleFinish = selectedCharacter.exp + expWithBonus

        await characterRepository.receiveExp(
          selectedCharacter._id,
          expWithBonus
        )

        if (expAfterBattleFinish >= expToNextBaseLevel) {
          await characterRepository.levelUp(
            selectedCharacter._id,
            selectedCharacter.level
          )
        }
      } else if (battleResolver.characterLife < 1) {
      }

      await characterRepository.leaveFromBattle(selectedCharacter._id)
      await characterRepository.receivedGold(
        selectedCharacter._id,
        goldWithBonus
      )
    }

    const battleMessage = getBattleMessage(
      battleIsFinished,
      battleResolver,
      expWithBonus,
      goldWithBonus
    )

    res.status(200).send({
      battleResolver,
      battleIsFinished,
      message: battleMessage
    })
  } catch (error) {
    res.handleError(500, error)
  }
}

async function leaveBattle(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const data = await characterRepository.leaveFromBattle(
      selectedCharacter._id
    )

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

module.exports = {
  enterInBattle,
  battleAction,
  leaveBattle
}
