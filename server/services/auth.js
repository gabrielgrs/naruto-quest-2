const jwt = require('jsonwebtoken')

const SALT_KEY = 'game'

const generateToken = async data => {
  return jwt.sign(data, SALT_KEY, { expiresIn: '7d' })
}

const decodeToken = async token => {
  const data = await jwt.verify(token, SALT_KEY)
  return data
}

function authorize(req, res, next) {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.status(401).json({
      message: 'Acesso Restrito'
    })
  } else {
    jwt.verify(token, SALT_KEY, function(error, decoded) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido'
        })
      } else {
        next()
      }
    })
  }
}

function isAdmin(req, res, next) {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.status(401).json({
      message: 'Token Inválido'
    })
  } else {
    jwt.verify(token, SALT_KEY, function(error, decoded) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido'
        })
      } else {
        if (decoded.roles.includes('admin')) {
          next()
        } else {
          res.status(403).json({
            message: 'Esta funcionalidade é restrita para administradores'
          })
        }
      }
    })
  }
}

module.exports = {
  generateToken,
  decodeToken,
  authorize,
  isAdmin
}
