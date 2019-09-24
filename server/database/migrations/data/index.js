const { enemies } = require('./enemies')
const { skills } = require('./skills')
const { jobs } = require('./jobs')
const { items } = require('./items')
const { equipments } = require('./equipments')
const { quests } = require('./quest')

const migrationCollections = {
  MONSTERS: {
    controller: 'enemy',
    name: 'enemies'
  },
  ITEMS: {
    controller: 'item',
    name: 'items'
  },
  WEAPONS: {
    controller: 'weapon',
    name: 'weapons'
  },
  EQUIPMENTS: {
    controller: 'equipment',
    name: 'equipments'
  },
  SKILLS: {
    controller: 'skill',
    name: 'skills'
  },
  JOBS: {
    controller: 'job',
    name: 'jobs'
  },
  BATTLE: {
    controller: 'battle',
    name: 'battles'
  },
  QUEST: {
    controller: 'quest',
    name: 'quests'
  }
}

module.exports = {
  migrationCollections,
  jobs,
  enemies,
  skills,
  items,
  equipments,
  quests
}
