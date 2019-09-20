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
    weapon: { type: Schema.Types.ObjectId, ref: 'Equipment' },
    head: { type: Schema.Types.ObjectId, ref: 'Equipment' },
    trunk: { type: Schema.Types.ObjectId, ref: 'Equipment' },
    arms: { type: Schema.Types.ObjectId, ref: 'Equipment' },
    legs: { type: Schema.Types.ObjectId, ref: 'Equipment' }
  },
  element: {
    type: String,
    default: 'neutral',
    enum: ['fire', 'wind', 'lightning', 'earth', 'water', 'neutral']
  },
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Skill'
    }
  ],
  selectedJob: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
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
    ref: 'Battle'
  },
  currentTeam: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  currentQuest: {
    type: Schema.Types.ObjectId,
    ref: 'Quest'
  },
  startedLastQuestAt: {
    type: Date
  },
  // TODO: only one quest?
  // completedQuests: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Quest'
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
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  equipments: [{ type: Schema.Types.ObjectId, ref: 'Equipment' }],
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

module.exports = model('Character', schema)
