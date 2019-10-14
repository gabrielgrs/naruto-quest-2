const md5 = require('md5')

const repository = require('../repositories/user')
const authService = require('../services/auth')

async function register(req, res) {
  try {
    const { email, password } = req.body
    await repository.register({
      email,
      password: md5(password)
    })

    res.status(200).send({ email, message: 'Registro realizado com sucesso' })
  } catch (error) {
    res.handleError(500, error)
  }
}

async function authenticate(req, res) {
  try {
    const { email, password } = req.body
    const response = await repository.authenticate({
      email,
      password: md5(password)
    })

    if (!response)
      return res.status(400).send({ message: 'Login ou senha inválido' })

    // TODO
    const token = response.selectedCharacter
      ? await authService.generateToken({
          _id: response._id,
          email,
          role: response.role,
          level: response.selectedCharacter.level,
          selectedCharacterId: response.selectedCharacter._id
        })
      : await authService.generateToken({
          _id: response._id,
          email,
          role: response.role
        })

    const { characters } = response

    return res.status(200).send({
      message: 'Login realizado com sucesso',
      email,
      token,
      characters
    })
  } catch (error) {
    res.handleError(500, error)
  }
}

async function getUserByToken(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const {
      email,
      characters,
      selectedCharacter,
      vipCredits,
      additionalCharacters
    } = await repository.getById(_id)
    return res.status(200).send({
      message: 'Usuário encontrado com sucesso',
      email,
      characters,
      selectedCharacter,
      vipCredits,
      additionalCharacters
    })
  } catch (error) {
    res.handleError(500, error)
  }
}

async function selectCharacter(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    await repository.update(_id, req.body)

    return res.status(200).send({
      message: 'Usuário encontrado com sucesso'
    })
  } catch (error) {
    res.handleError(500, error)
  }
}

module.exports = {
  register,
  authenticate,
  getUserByToken,
  selectCharacter
}
