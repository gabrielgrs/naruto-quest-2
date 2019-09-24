const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    character: {
      type: Schema.Types.ObjectId,
      ref: 'Character',
      autopopulate: true
    },
    enemy: {
      type: Schema.Types.ObjectId,
      ref: 'Enemy',
      autopopulate: true
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
          ref: 'Character',
          autopopulate: true
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

schema.plugin(require('mongoose-autopopulate'))
module.exports = model('Battle', schema)
