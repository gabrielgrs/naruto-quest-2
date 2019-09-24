const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    unique: true
  },
  level: { type: Number, default: 1 },
  exp: { type: Number, default: 0 },
  gold: { Type: Number, default: 0 },
  attributePoints: { Type: Number, default: 0 },
  skillPoints: { type: Number, default: 0 },
  bodyEquipments: {
    weapon: {
      type: Schema.Types.ObjectId,
      ref: 'Equipment',
      autopopulate: true
    },
    head: { type: Schema.Types.ObjectId, ref: 'Equipment', autopopulate: true },
    trunk: {
      type: Schema.Types.ObjectId,
      ref: 'Equipment',
      autopopulate: true
    },
    arms: { type: Schema.Types.ObjectId, ref: 'Equipment', autopopulate: true },
    legs: { type: Schema.Types.ObjectId, ref: 'Equipment', autopopulate: true },
    feets: { type: Schema.Types.ObjectId, ref: 'Equipment', autopopulate: true }
  },
  element: {
    type: String,
    default: 'neutral',
    enum: ['fire', 'wind', 'lightning', 'earth', 'water', 'neutral']
  },
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Skill',
      autopopulate: true
    }
  ],
  selectedJob: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    autopopulate: true
  },
  ninjaRank: {
    type: String,
    enum: ['Student', 'Genin', 'Chuunin', 'Jounin', 'ANBU', 'Sannin'],
    default: 'Student'
  },
  village: {
    type: 'String',
    enum: ['Leaf', 'Cloud', 'Mist', 'Rock', 'Sand', 'Sound']
  },
  inBattle: { type: Boolean, default: false },
  currentBattle: {
    type: Schema.Types.ObjectId,
    ref: 'Battle',
    autopopulate: true
  },
  currentTeam: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    autopopulate: true
  },
  currentQuest: {
    type: Schema.Types.ObjectId,
    ref: 'Quest',
    autopopulate: true
  },
  startedLastQuestAt: {
    type: Date
  },
  // TODO: only one quest?
  // completedQuests: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Quest',autopopulate: true
  //   }
  // ],
  attributes: {
    life: Number,
    mana: Number,
    stamina: { type: Number, default: 20 },
    attack: Number,
    vitality: Number,
    intelligence: Number
  },
  stats: {
    maxLife: { type: Number, default: 0 },
    maxMana: { type: Number, default: 0 },
    maxStamina: { type: Number, default: 0 }
  },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item', autopopulate: true }],
  equipments: [
    { type: Schema.Types.ObjectId, ref: 'Equipment', autopopulate: true }
  ],
  currentStoryPoint: {
    type: Number,
    default: 0
  },
  completedQuests: {
    D: {
      type: Number,
      default: 0
    },
    C: {
      type: Number,
      default: 0
    },
    B: {
      type: Number,
      default: 0
    },
    A: {
      type: Number,
      default: 0
    },
    S: {
      type: Number,
      default: 0
    }
  },
  lastSessionTime: Date
  // createdAt: Date.now()
})

schema.plugin(require('mongoose-autopopulate'))
module.exports = model('Character', schema)
