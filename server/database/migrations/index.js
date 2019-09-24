const {
  migrationCollections,
  enemies,
  jobs,
  skills,
  items,
  equipments,
  quests
} = require('./data')

// const createAndPopulate = (controller, list) => {
//   list.map(item => require(`../../repositories/${controller}`).insert(item))
//   console.log(`${controller} created`)
// }

const verifyAndCreate = async (list, collection) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Creating collection ${collection.name}`)
  }
  const repository = require(`../../repositories/${collection.controller}`)
  return list.map(async item => {
    try {
      const response = await repository.getByCode(item.code)
      if (!response) {
        await repository.insert(item)
      }
    } catch (error) {
      console.log(error)
    }
  })
}

async function executeMigrations() {
  try {
    verifyAndCreate(enemies, migrationCollections.MONSTERS)
    verifyAndCreate(skills, migrationCollections.SKILLS)
    verifyAndCreate(items, migrationCollections.ITEMS)
    verifyAndCreate(jobs, migrationCollections.JOBS)
    verifyAndCreate(quests, migrationCollections.QUEST)
    verifyAndCreate(equipments, migrationCollections.EQUIPMENTS)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  executeMigrations
}
