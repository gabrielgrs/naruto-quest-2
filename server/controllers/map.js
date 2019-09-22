const mapModel = require('../models/map')
const userRepository = require('../repositories/user')

const {
  generateMap: generateMapHelper,
  createRelativeMap,
  getDistance,
  populateMap
} = require('../helpers/map')

async function getMap(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const {
      selectedCharacter: { coordinate }
    } = await userRepository.getById(_id)

    const data = await Promise.resolve(mapModel.findOne({ code: 0 }))

    const parts = createRelativeMap(coordinate, data.parts)

    return res.status(200).send(parts)
  } catch (error) {
    console.log(error)
    return res.handleError(500, error)
  }
}

async function getFullMap(req, res) {
  try {
    const data = await Promise.resolve(mapModel.findOne({ code: 0 }))

    return res.status(200).send(data)
  } catch (error) {
    console.log(error)
    return res.handleError(500, error)
  }
}

async function generateMap(req, res) {
  try {
    await mapModel.findOneAndRemove({ code: 0 })
    const generatedMap = await generateMapHelper(100)

    const response = await populateMap(generatedMap)

    await mapModel.create({
      code: 0,
      parts: response
    })

    res.send(response)
  } catch (error) {
    console.log(error)
    return res.handleError(500, error)
  }
}

module.exports = {
  getMap,
  generateMap,
  getFullMap
}
