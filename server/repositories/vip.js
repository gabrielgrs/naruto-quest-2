const characterModel = require('../models/character')
const userModel = require('../models/user')
const { getMaxLife, getMaxMana } = require('../helpers')

const decreaseVipCredits = (_id, vipCreditsCost) =>
  userModel.findByIdAndUpdate(
    { _id },
    { $inc: { vipCredits: -vipCreditsCost } }
  )

const resetAttributes = (_id, attributesQuantity, level, currentStamina) =>
  characterModel.findByIdAndUpdate(
    { _id },
    {
      $set: {
        attributePoints: attributesQuantity,
        attributes: {
          attack: 0,
          vitality: 0,
          intelligence: 0,
          stamina: currentStamina,
          life: getMaxLife(0, level),
          mana: getMaxMana(0, level)
        }
      }
    }
  )

const resetJutsus = (_id, jutsusQuantity) =>
  characterModel.findOneAndUpdate(
    { _id },
    { $set: { skills: [], skillPoints: jutsusQuantity } }
  )

const changeName = (_id, name) =>
  characterModel.findByIdAndUpdate({ _id }, { $set: { name } })

const changeVillage = (_id, village) =>
  characterModel.findByIdAndUpdate({ _id }, { $set: { village } })

const addCharacterSlot = _id =>
  userModel.findByIdAndUpdate({ _id }, { $inc: { additionalCharacters: 1 } })

const buyRyous = (_id, ryousQuantity) =>
  characterModel.findByIdAndUpdate({ _id }, { $inc: { gold: ryousQuantity } })

const recoveryStamina = (_id, stamina) =>
  characterModel.findByIdAndUpdate(
    { _id },
    { $set: { 'attributes.stamina': stamina } }
  )

const recoveryStatus = (_id, { life, mana }) =>
  characterModel.findByIdAndUpdate(
    { _id },
    { $set: { ['attributes.life']: life, ['attributes.mana']: mana } }
  )

module.exports = {
  decreaseVipCredits,
  resetAttributes,
  resetJutsus,
  changeName,
  changeVillage,
  addCharacterSlot,
  buyRyous,
  recoveryStamina,
  recoveryStatus
}
