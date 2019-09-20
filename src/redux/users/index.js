import {
  authenticateSuccess,
  authenticateFail,
  authenticate as authenticateReducer,
  registerSuccess,
  registerFail,
  register as registerReducer,
  getUserByToken as getUserByTokenReducer,
  getUserByTokenSuccess,
  getUserByTokenFail,
  createCharacter as createCharacterReducer,
  createCharacterSuccess,
  createCharacterFail,
  selectCharacter as selectCharacterReducer,
  selectCharacterSuccess,
  selectCharacterFail,
  clearState
} from './reducer'
import * as usersCollection from '../../api/user'
import * as storageHelper from '../../helpers/storage'
import * as notify from '../../helpers/notify'
import { getUserByToken as getUserByTokenAction } from '../users'

export const authenticate = (email, password) => {
  return async dispatch => {
    dispatch(authenticateReducer())
    try {
      const { data } = await usersCollection.authenticate({ email, password })
      storageHelper.setItem('token', data.token)
      dispatch(authenticateSuccess(data))
    } catch (error) {
      notify.error(error.response.data.message)
      dispatch(authenticateFail(error))
    }
  }
}

export const getUserByToken = token => {
  return async dispatch => {
    dispatch(getUserByTokenReducer())
    try {
      if (!storageHelper.getItem('token')) throw new Error('Token not found')
      const { data } = await usersCollection.getUserByToken(token)
      dispatch(getUserByTokenSuccess(data))
      // TODO
    } catch (error) {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error.includes('TokenExpiredErro')
      ) {
        notify.error('Token expirada')
        storageHelper.clearStorage()
        window.location = '/'
      } else {
        notify.error(error.message)
      }

      if (error.response && error.response.status === 500) {
        storageHelper.clearStorage()
        window.location = '/'
      }

      dispatch(getUserByTokenFail(error))
    }
  }
}

export const register = (email, password) => {
  return async dispatch => {
    dispatch(registerReducer())
    try {
      const data = await usersCollection.register({ email, password })
      dispatch(authenticate(email, password))
      dispatch(registerSuccess(data))
    } catch (error) {
      const message = error.response.data.error.includes('duplicate key')
        ? 'E-mail já cadastrado'
        : 'Falha ao processar a requisição'
      notify.error(message)
      dispatch(registerFail(error))
    }
  }
}

export const clearSession = callback => {
  return dispatch => {
    try {
      dispatch(clearState())
      callback()
    } catch (error) {
      notify.error(error)
    }
  }
}

export const createCharacter = (id, character) => {
  return async dispatch => {
    dispatch(createCharacterReducer())
    try {
      const data = await usersCollection.createCharacter(id, { ...character })
      dispatch(createCharacterSuccess(data))
    } catch (error) {
      notify.error(error)
      dispatch(createCharacterFail(error))
    }
  }
}

export const selectCharacter = (id, character) => {
  return async dispatch => {
    dispatch(selectCharacterReducer())
    try {
      await usersCollection.update({
        selectedCharacter: character._id
      })
      dispatch(getUserByTokenAction())
      dispatch(selectCharacterSuccess(character))
    } catch (error) {
      notify.error(error)
      dispatch(selectCharacterFail(error))
    }
  }
}
