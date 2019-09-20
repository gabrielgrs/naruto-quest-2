const authService = require('../services/auth')
const userRepository = require('../repositories/user')
const characterRepository = require('../repositories/character')

const registerInfo = async ({ _id }) => {
  const { selectedCharacter } = await userRepository.getById(_id)
  return characterRepository.setLastSesseionTime(
    selectedCharacter._id,
    Date.now()
  )
}

async function auth(req, res, next) {
  res.getCurrentUser = async () => {
    const token = req.headers['x-access-token']

    const data = await authService.decodeToken(token)

    registerInfo(data)

    return data
  }

  next()
}

module.exports = {
  auth
}
