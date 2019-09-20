const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    character: {
      type: Schema.Types.ObjectId,
      ref: 'Character'
    },
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
