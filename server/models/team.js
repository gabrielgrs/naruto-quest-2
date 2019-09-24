const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Character',
    autopopulate: true
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Character',
      autopopulate: true
    }
  ],
  village: {
    type: 'String',
    enum: ['Leaf', 'Cloud', 'Mist', 'Rock', 'Sand', 'Sound']
  }
})

schema.plugin(require('mongoose-autopopulate'))
module.exports = model('Team', schema)
