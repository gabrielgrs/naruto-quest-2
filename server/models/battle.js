const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    character: {
      type: Schema.Types.ObjectId,
      ref: 'Character'
    },
    lastCharacterAction: {
      type: Date
    },
    // ONLY FOR PVPV
    oponent: {
      type: Schema.Types.ObjectId,
      ref: 'Character'
    },
    lastOponentAction: {
      type: Date
    },
    // ONLY FOR PVPV
    enemy: {
      type: Schema.Types.ObjectId,
      ref: 'Enemy'
    },
    delayedSkills: [
      {
        code: Number,
        delay: Number
      }
    ],
    currentEnemyLife: Number,
    log: [
      {
        actionType: String,
        description: String,
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
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

module.exports = model('Battle', schema)
