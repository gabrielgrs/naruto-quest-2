const model = require('../models/message')

const getAll = () =>
  model
    .find({ toSupport: false })
    // .sort({ code: 'desc' })
    // .sort({ createdAt: 'asc' })
    // .limit(30)
    .populate('sender')
    .populate('receiver')

const insert = async (sender, receiver, text, toSupport = false) => {
  // const size = model,find({ toSuport: false })
  // const size = await model.find({ toSupport: false })
  return model.create({
    sender,
    receiver,
    text,
    toSupport
    // code: size.length + 1
  })
}

module.exports = {
  getAll,
  insert
}
