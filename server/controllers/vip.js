// const characterRepository = require('../repositories/character')
const userRepository = require('../repositories/user')
const characterRepository = require('../repositories/character')
const vipRepository = require('../repositories/vip')
const skillRepository = require('../repositories/skill')
const {
  userHasCredits,
  canUseName,
  villageIsValid
} = require('../validations/vip')
const rules = require('../config/rules')

const costs = {
  resetAttributes: 1,
  resetJutsus: 1,
  changeName: 1,
  changeVillage: 1,
  addCharacterSlot: 1,
  buyRyous: 1,
  recoveryStamina: 1,
  recoveryStatus: 1
}

async function resetAttributes(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter, vipCredits } = await userRepository.getById(_id)

    const errorMessage = await userHasCredits(vipCredits, costs.resetAttributes)

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }

    const normalizedLevel = selectedCharacter.level - 1

    // Max Attributes
    const maxAttributesCanHave =
      normalizedLevel * rules.attributesPointsPerLevel +
      rules.maxAttributePoints

    await vipRepository.resetAttributes(
      selectedCharacter._id,
      maxAttributesCanHave,
      selectedCharacter.level,
      selectedCharacter.attributes.stamina
    )
    await vipRepository.decreaseVipCredits(_id, costs.resetAttributes)

    const data = undefined
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function resetJutsus(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter, vipCredits } = await userRepository.getById(_id)

    const errorMessage = await userHasCredits(vipCredits, costs.resetAttributes)

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }
    const skillsCanLearn = Math.trunc(
      selectedCharacter.level / rules.levelQuantityToGetSkillPoint
    )

    await vipRepository.resetJutsus(selectedCharacter._id, skillsCanLearn)

    const { _id: skillId } = await skillRepository.getByCode(0)
    const { _id: skillId2 } = await skillRepository.getByCode(1)
    await characterRepository.update(selectedCharacter._id, {
      skill: String(skillId)
    })
    await characterRepository.update(selectedCharacter._id, {
      skill: String(skillId2)
    })

    await vipRepository.decreaseVipCredits(_id, costs.resetJutsus)

    const data = undefined
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function changeName(req, res) {
  try {
    const { name } = req.body

    const { _id } = await res.getCurrentUser()
    const { selectedCharacter, vipCredits } = await userRepository.getById(_id)

    const errorMessage = await userHasCredits(vipCredits, costs.changeName)
    const nameIsInvalidMessage = await canUseName(name)

    if (errorMessage || nameIsInvalidMessage) {
      return res
        .status(400)
        .send({ message: errorMessage || nameIsInvalidMessage })
    }

    await vipRepository.changeName(selectedCharacter._id, name)
    await vipRepository.decreaseVipCredits(_id, costs.changeName)

    const data = undefined
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function changeVillage(req, res) {
  try {
    const { village } = req.body

    const { _id } = await res.getCurrentUser()
    const { selectedCharacter, vipCredits } = await userRepository.getById(_id)

    const errorMessage = await userHasCredits(vipCredits, costs.changeVillage)
    const villageIsInvalidMessage = await villageIsValid(village)

    if (errorMessage || villageIsInvalidMessage) {
      return res
        .status(400)
        .send({ message: errorMessage || villageIsInvalidMessage })
    }

    await vipRepository.changeVillage(selectedCharacter._id, village)
    await vipRepository.decreaseVipCredits(_id, costs.changeVillage)

    const data = undefined
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function addCharacterSlot(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { vipCredits } = await userRepository.getById(_id)

    const errorMessage = await userHasCredits(
      vipCredits,
      costs.addCharacterSlot
    )

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }

    await vipRepository.addCharacterSlot(_id)
    await vipRepository.decreaseVipCredits(_id, costs.addCharacterSlot)

    const data = undefined
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function buyRyous(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter, vipCredits } = await userRepository.getById(_id)

    const errorMessage = await userHasCredits(vipCredits, costs.buyRyous)

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }
    const { quantity } = req.body

    await vipRepository.buyRyous(selectedCharacter._id, quantity)
    await vipRepository.decreaseVipCredits(_id, costs.buyRyous)

    const data = undefined
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function recoveryStamina(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter, vipCredits } = await userRepository.getById(_id)

    const errorMessage = await userHasCredits(vipCredits, costs.recoveryStamina)

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }
    await vipRepository.recoveryStamina(
      selectedCharacter._id,
      selectedCharacter.stats.maxStamina
    )
    await vipRepository.decreaseVipCredits(_id, costs.recoveryStamina)

    const data = undefined
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function recoveryStatus(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter, vipCredits } = await userRepository.getById(_id)

    const errorMessage = await userHasCredits(vipCredits, costs.recoveryStatus)

    if (errorMessage) {
      return res.status(400).send({ message: errorMessage })
    }

    await vipRepository.recoveryStatus(selectedCharacter._id, {
      life: selectedCharacter.stats.maxLife,
      mana: selectedCharacter.stats.maxMana
    })

    await vipRepository.decreaseVipCredits(_id, costs.recoveryStatus)

    const data = undefined
    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

module.exports = {
  resetAttributes,
  resetJutsus,
  changeName,
  changeVillage,
  addCharacterSlot,
  buyRyous,
  recoveryStamina,
  recoveryStatus
}
