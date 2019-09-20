import { actionTypes } from './helpers'
import * as storageHelper from '../../helpers/storage'

const getToken = () => storageHelper.getItem('token')

const INITIAL_STATE = {
  isAuthenticated: !!getToken(),
  token: getToken(),
  currentUser: {},
  selectedCharacter: {},
  characters: [],
  vip: false,
  loadingUser: false
}

export const authenticate = () => ({ type: actionTypes.AUTHENTICATE.BASE })

export const authenticateSuccess = data => ({
  type: actionTypes.AUTHENTICATE.SUCCESS,
  payload: data
})

export const authenticateFail = error => ({
  type: actionTypes.AUTHENTICATE.FAIL,
  payload: error
})

export const getUserByToken = () => ({
  type: actionTypes.GET_USER_BY_TOKEN.BASE
})

export const getUserByTokenSuccess = data => ({
  type: actionTypes.GET_USER_BY_TOKEN.SUCCESS,
  payload: data
})

export const getUserByTokenFail = error => ({
  type: actionTypes.GET_USER_BY_TOKEN.BASE,
  payload: error
})

export const register = () => ({ type: actionTypes.REGISTER.BASE })

export const registerSuccess = data => ({
  type: actionTypes.REGISTER.SUCCESS,
  payload: data
})

export const registerFail = error => ({
  type: actionTypes.REGISTER.FAIL,
  payload: error
})

export const getUserByEmail = () => ({ type: actionTypes.GET_BY_EMAIL.BASE })

export const getUserByEmailSuccess = data => ({
  type: actionTypes.GET_BY_EMAIL.SUCCESS,
  payload: data
})

export const getUserByEmailFail = error => ({
  type: actionTypes.GET_BY_EMAIL.FAIL,
  payload: error
})

export const createCharacter = () => ({
  type: actionTypes.CREATE_CHARACTER.BASE
})

export const createCharacterSuccess = data => ({
  type: actionTypes.CREATE_CHARACTER.SUCCESS,
  payload: data
})

export const createCharacterFail = error => ({
  type: actionTypes.CREATE_CHARACTER.FAIL,
  payload: error
})

export const selectCharacter = () => ({
  type: actionTypes.SELECT_CHARACTER.BASE
})

export const selectCharacterSuccess = character => ({
  type: actionTypes.SELECT_CHARACTER.SUCCESS,
  payload: character
})

export const selectCharacterFail = error => ({
  type: actionTypes.SELECT_CHARACTER.FAIL,
  payload: error
})

export const clearState = () => ({
  type: actionTypes.CLEAR_STATE.BASE
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE.BASE:
      return { ...state, loadingUser: true }
    case actionTypes.AUTHENTICATE.SUCCESS:
      return {
        ...state,
        loadingUser: false,
        isAuthenticated: true,
        ...action.payload
      }
    case actionTypes.AUTHENTICATE.FAIL:
      return { ...state, loadingUser: false, error: action.payload }
    case actionTypes.GET_USER_BY_TOKEN.BASE:
      return { ...state, loadingUser: true }
    case actionTypes.GET_USER_BY_TOKEN.SUCCESS:
      return {
        ...state,
        loadingUser: false,
        isAuthenticated: true,
        ...action.payload
      }
    case actionTypes.GET_USER_BY_TOKEN.FAIL:
      return {
        ...state,
        loadingUser: false,
        isAuthenticated: false,
        error: action.payload
      }
    case actionTypes.REGISTER.BASE:
      return {
        ...state,
        loadingUser: true
      }
    case actionTypes.REGISTER.SUCCESS:
      return {
        ...state,
        loadingUser: false,
        isAuthenticated: true,
        ...action.payload
      }
    case actionTypes.REGISTER.FAIL:
      return { ...state, loadingUser: false, error: action.payload }
    case actionTypes.CREATE_CHARACTER.BASE:
      return {
        ...state,
        loadingUser: true
      }
    case actionTypes.CREATE_CHARACTER.SUCCESS:
      return { ...state, loadingUser: false, ...action.payload }
    case actionTypes.CREATE_CHARACTER.FAIL:
      return { ...state, loadingUser: false, error: action.payload }
    case actionTypes.SELECT_CHARACTER.BASE:
      return { ...state, loadingUser: true }
    case actionTypes.SELECT_CHARACTER.SUCCESS:
      return { ...state, loadingUser: false, selectedCharacter: action.payload }
    case actionTypes.SELECT_CHARACTER.FAIL:
      return { ...state, loadingUser: false, error: action.payload }
    case actionTypes.CLEAR_STATE.BASE:
      return INITIAL_STATE
    default:
      return state
  }
}
