const model = require('../models/character')
const rules = require('../config/rules')

const getAll = () => model.find({})

const getByName = name => model.find({ name })

const getById = id => model.findById(id)

const insert = data => model.create(data)

const setLastSesseionTime = (_id, lastSessionTime) =>
  model.findOneAndUpdate({ _id }, { $set: { lastSessionTime } })

const getRanking = () =>
  model
    .find()
    .sort({ level: -1, exp: -1 })
    .populate('selectedJob')

const update = (_id, { skill, ...data }) =>
  model.findOneAndUpdate({ _id }, { ...data, $push: { skills: skill } })

const setAttributes = (_id, { attributePoints, attributes }) => {
  return model.findOneAndUpdate({ _id }, { attributes, attributePoints })
}

const changeJob = (_id, { jobId }, jobRank) => {
  return model.findByIdAndUpdate({ _id }, { selectedJob: jobId, jobRank })
}

const enterInBattle = (_id, battleId) =>
  model.findOneAndUpdate(
    { _id },
    { $set: { currentBattle: battleId, inBattle: true } }
  )

const enterInQuest = (_id, questId) =>
  model.findOneAndUpdate(
    { _id },
    {
      $set: { currentQuest: questId, startedLastQuestAt: Date.now() },
      $inc: { 'attributes.stamina': -1 }
    }
  )

const enterInTeam = async (_id, teamId) =>
  model.findOneAndUpdate({ _id }, { $set: { currentTeam: teamId } })

const finishQuest = (_id, quest, continueInQuest) =>
  model.findOneAndUpdate(
    { _id },
    {
      $set: continueInQuest ? {} : { currentQuest: null },
      $inc: {
        gold: quest.gold,
        exp: quest.exp,
        [`completedQuests.${quest.ranking}`]: continueInQuest ? 0 : 1
      }
    }
  )

const leaveQuest = _id =>
  model.findOneAndUpdate({ _id }, { $set: { currentQuest: null } })

const updateUserAttributes = (_id, life, mana) => {
  return model.findOneAndUpdate(
    { _id },
    {
      $set: { 'attributes.life': life, 'attributes.mana': mana }
    }
  )
}

const levelUp = (_id, characterLevel) => {
  const skillPoints =
    characterLevel % rules.levelQuantityToGetSkillPoint === 0 ? 1 : 0

  return model.findOneAndUpdate(
    { _id },
    {
      $inc: {
        level: 1,
        skillPoints,
        attributePoints: rules.attributesPointsPerLevel
      }
    }
  )
}

const receivedGold = (_id, gold) => {
  return model.findOneAndUpdate({ _id }, { $inc: { gold } })
}

const receiveExp = (_id, exp) => {
  return model.findOneAndUpdate({ _id }, { $inc: { exp } })
}

const buyItem = (_id, { item }) => {
  return model.findByIdAndUpdate(
    { _id },
    {
      $inc: { gold: item.price * -1 },
      $push:
        item.type === 'item' ? { items: item._id } : { equipments: item._id }
    }
  )
}

const setEquipment = async (_id, { equipment }) => {
  return model.findByIdAndUpdate(
    { _id },
    {
      $set: {
        [`bodyEquipments.${equipment.usageType}`]: equipment._id
      }
    }
  )
}

// TODO
const useItem = async (_id, itemId) => {
  return model.findByIdAndUpdate({ _id }, { $pull: { items: itemId } })
}

const recoveryCharacter = async (_id, { life, mana }, cost) => {
  return model.findByIdAndUpdate(
    { _id },
    {
      $set: {
        'attributes.life': life,
        'attributes.mana': mana
      },
      $inc: {
        gold: -cost
      }
    }
  )
}

const updateStamina = (_id, quantity) => {
  return model.findOneAndUpdate(
    { _id },
    { $inc: { 'attributes.stamina': quantity } }
  )
}

const updateLifeAndMana = (_id, life, mana) => {
  return model.findOneAndUpdate(
    { _id },
    { $inc: { 'attributes.life': life, 'attributes.mana': mana } }
  )
}

const rankUp = _id => {
  return model.findOneAndUpdate({ _id }, { $inc: { ninjaRank: 1 } })
}

const leaveFromBattle = _id => {
  return model.findOneAndUpdate(
    { _id },
    { inBattle: false, currentBattle: undefined }
  )
}

const unselectCharacter = _id =>
  model.findOneAndUpdate({ _id }, { $set: { selectedCharacter: {} } })

const remove = _id => model.findOneAndRemove({ _id })

const getByCode = code => model.findOne({ code })

const learnElement = (_id, element) => {
  return model.findOneAndUpdate({ _id }, { $set: { element } })
}

module.exports = {
  getAll,
  getRanking,
  getByName,
  getById,
  insert,
  update,
  setAttributes,
  changeJob,
  levelUp,
  updateUserAttributes,
  recoveryCharacter,
  buyItem,
  useItem,
  rankUp,
  enterInBattle,
  enterInTeam,
  enterInQuest,
  finishQuest,
  leaveQuest,
  updateStamina,
  updateLifeAndMana,
  receiveExp,
  receivedGold,
  leaveFromBattle,
  remove,
  unselectCharacter,
  getByCode,
  learnElement,
  setEquipment,
  setLastSesseionTime
}
