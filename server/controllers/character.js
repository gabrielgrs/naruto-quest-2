const userRepository = require('../repositories/user')
const repository = require('../repositories/character')
const jobRepository = require('../repositories/job')
const skillRepository = require('../repositories/skill')
const validator = require('../validations/character')
const questValidator = require('../validations/quest')
const { ninjaRankRequiredLevel } = require('../config/rules')
const { getMaxLife, getMaxMana, getMaxStamina, levels } = require('../helpers')

async function insert(req, res) {
  try {
    const validationMessage = await validator.insert(req.body)

    if (validationMessage) {
      return res.status(400).send({ message: validationMessage })
    }

    const currentUser = await res.getCurrentUser()

    const { _id: skillId } = await skillRepository.getByCode(0)
    const { _id: skillId2 } = await skillRepository.getByCode(1)

    const { vitality, intelligence } = req.body.attributes

    const data = await repository.insert({
      ...req.body,
      attributes: {
        ...req.body.attributes,
        life: getMaxLife(vitality),
        mana: getMaxMana(intelligence)
      },
      stats: {
        maxLife: getMaxLife(vitality),
        maxMana: getMaxMana(intelligence),
        maxStamina: getMaxStamina(1)
      }
    })
    await userRepository.insertCharacter(currentUser._id, data._id)
    await repository.update(data._id, { skill: String(skillId) })
    await repository.update(data._id, { skill: String(skillId2) })
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function getRanking(req, res) {
  try {
    const data = await repository.getRanking()
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function learnSkill(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const errorMessage = await validator.learnSkill(
      selectedCharacter.skills,
      selectedCharacter.level
    )

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }

    const data = await repository.update(selectedCharacter._id, req.body)
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function setEquipment(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const data = await repository.setEquipment(selectedCharacter._id, req.body)
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function setAttributes(req, res) {
  try {
    const { characterId } = req.params

    const { attributePoints, attributes } = req.body

    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const validationMessage = await validator.setAttributes(
      selectedCharacter.attributes,
      selectedCharacter.level
    )

    if (validationMessage) {
      return res.status(400).send({ message: validationMessage })
    }

    const data = await repository.setAttributes(characterId, {
      attributePoints,
      attributes
    })
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function changeJob(req, res) {
  try {
    const { characterId } = req.params
    const { jobRank } = await jobRepository.getById(req.body.jobId)
    const data = await repository.changeJob(characterId, req.body, jobRank)
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function enterInQuest(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const errorMessage = await questValidator.enterInQuest(selectedCharacter, 1)

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }

    const { questId } = req.body

    const data = await repository.enterInQuest(selectedCharacter._id, questId)
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function leaveQuest(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const data = await repository.leaveQuest(selectedCharacter._id)
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function finishQuest(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const expToNextLevel = levels[selectedCharacter.level + 1].exp.base

    const expAfterQuest =
      selectedCharacter.exp + selectedCharacter.currentQuest.exp

    if (expAfterQuest >= expToNextLevel) {
      await repository.levelUp(selectedCharacter._id, selectedCharacter.level)
    }

    if (
      selectedCharacter.ninjaRankg ===
      selectedCharacter.currentQuest.advanceToRank - 1
    ) {
      await repository.rankUp(selectedCharacter._id)
    }

    const data = await repository.finishQuest(
      selectedCharacter._id,
      selectedCharacter.currentQuest
    )

    if (selectedCharacter.currentQuest.needTeam) {
      const { owner, members } = selectedCharacter.currentTeam
      const combinedMembers = [owner._id, ...members.map(m => m._id)].filter(
        x => x !== selectedCharacter._id
      )

      combinedMembers.map(async i => {
        const gold = 0
        const exp = Math.trunc(selectedCharacter.currentQuest.exp / 2)
        await repository.finishQuest(i, { gold, exp }, true)
      })
    }

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function buyItem(req, res) {
  try {
    const { characterId } = req.params
    const data = await repository.buyItem(characterId, req.body)
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function recoveryCharacter(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const recoveryValues = {
      life: getMaxLife(
        selectedCharacter.attributes.vitality,
        selectedCharacter.level
      ),
      mana: getMaxMana(
        selectedCharacter.attributes.intelligence,
        selectedCharacter.level
      )
    }
    const cost = selectedCharacter.level * 10

    const data = await repository.recoveryCharacter(
      selectedCharacter._id,
      recoveryValues,
      cost
    )
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function learnElement(req, res) {
  try {
    const { element } = req.body

    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)
    const data = await repository.learnElement(selectedCharacter._id, element)

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params

    const { _id } = await res.getCurrentUser()
    const user = await userRepository.getById(_id)
    if (String(id) === String(user.selectedCharacter._id)) {
      await repository.unselectCharacter(_id)
    }

    await repository.remove(id)

    res.status(200).send({ message: 'Remoção realizada com sucesso!' })
  } catch (error) {
    res.handleError(500, error)
  }
}

module.exports = {
  insert,
  getRanking,
  learnSkill,
  changeJob,
  setAttributes,
  setEquipment,
  recoveryCharacter,
  buyItem,
  enterInQuest,
  finishQuest,
  leaveQuest,
  learnElement,
  remove
}
