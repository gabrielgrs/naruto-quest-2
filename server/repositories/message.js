const model = require('../models/message')

const getAll = () =>
  model
    .find({ toSupport: false })
    .sort({ createdAt: 1 })
    // .limit(30)
    .populate('sender')
    .populate('receiver')

const insert = (sender, receiver, text, toSupport = false) =>
  model.create({ sender, receiver, text, toSupport })

module.exports = {
  getAll,
  insert
}
