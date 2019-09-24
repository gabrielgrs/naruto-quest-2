const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
  selectedCharacter: {
    type: Schema.Types.ObjectId,
    ref: 'Character',
    autopopulate: true
  },
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Character',
      autopopulate: true
    }
  ],
  vipCredits: {
    type: Number,
    default: 0
  },
  role: {
    type: String,
    required: true,
    default: 'User',
    enum: ['user', 'Admin']
  },
  additionalCharacters: {
    type: Number,
    default: 0
  }
})

schema.plugin(require('mongoose-autopopulate'))
module.exports = model('User', schema)
