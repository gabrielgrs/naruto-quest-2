const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
  selectedCharacter: {
    type: Schema.Types.ObjectId,
    ref: 'Character'
  },
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Character'
    }
  ],
  vipCredits: {
    type: Number,
    default: 0
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user', 'admin']
  },
  additionalCharacters: {
    type: Number,
    default: 0
  }
})

module.exports = model('User', schema)
