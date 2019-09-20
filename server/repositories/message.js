const model = require('../models/message')

const getAll = () =>
  model
    .find()
    .sort({ createdAt: 1 })
    // .limit(30)
    .populate('sender')
    .populate('receiver')

const insert = (sender, receiver, text) =>
  model.create({ sender, receiver, text })

module.exports = {
  getAll,
  insert
}
