const model = require('../models/team')

const getAll = characterVillage =>
  model
    .find({
      village: characterVillage
    })
    .populate('owner')
    .populate('members')

const getById = id => model.findById(id)

const insert = data => model.create(data)

const insertMemberIntoATeam = (_id, characterId) =>
  model.findOneAndUpdate({ _id }, { $push: { members: characterId } })

const update = (id, data) => model.findByIdAndUpdate(id, data)

const remove = _id => model.findOneAndRemove({ _id })

module.exports = {
  getAll,
  getById,
  insert,
  insertMemberIntoATeam,
  update,
  remove
}
