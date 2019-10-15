const { Schema, model } = require('mongoose')

const schema = new Schema({
  character: {
    type: Schema.Types.ObjectId,
    ref: 'Character'
  },
  lastCharacterAction: {
    type: Date
  },
  // ONLY FOR PVP
  oponent: {
    type: Schema.Types.ObjectId,
    ref: 'Character'
  },
  lastOponentAction: {
    type: Date
  },
  // ONLY FOR PVP
  enemy: {
    type: Schema.Types.ObjectId,
    ref: 'Enemy'
  },
  delayedSkills: [
    {
      characterId: { type: Schema.Types.ObjectId, ref: 'Character' },
      code: Number,
      delay: Number
    }
  ],
  currentEnemyLife: Number,
  log: [
    {
      actionType: String,
      description: String,
      value: Number,
      who: {
        type: Schema.Types.ObjectId,
        ref: 'Character'
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('Battle', schema)
