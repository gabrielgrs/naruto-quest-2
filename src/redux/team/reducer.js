import { actionTypes } from './helpers'

const INITIAL_STATE = {
  teamsList: [],
  selected: {},
  loadingTeam: false
}

export const getAll = () => ({ type: actionTypes.GET_ALL.BASE })

export const getAllSuccess = data => ({
  type: actionTypes.GET_ALL.SUCCESS,
  payload: data
})

export const getAllFail = error => ({
  type: actionTypes.GET_ALL.FAIL,
  payload: error
})

export const getById = data => ({ type: actionTypes.GET_ID, payload: data })

export const getByIdSuccess = data => ({
  type: actionTypes.GET_BY_ID.SUCCESS,
  payload: data
})

export const getByIdFail = () => ({ type: actionTypes.GET_BY_ID.FAIL })

export const createTeam = data => ({
  type: actionTypes.CREATE_TEAM.BASE,
  payload: data
})

export const createTeamSuccess = data => ({
  type: actionTypes.CREATE_TEAM.SUCCESS,
  payload: data
})

export const createTeamFail = () => ({
  type: actionTypes.REQUEST_JOIN_THE_TEAM.FAIL
})

export const requestJoinTheTeam = data => ({
  type: actionTypes.REQUEST_JOIN_THE_TEAM.BASE,
  payload: data
})

export const requestJoinTheTeamSuccess = data => ({
  type: actionTypes.REQUEST_JOIN_THE_TEAM.SUCCESS,
  payload: data
})

export const requestJoinTheTeamFail = () => ({
  type: actionTypes.CREATE_TEAM.FAIL
})

export const clearState = () => ({
  type: actionTypes.CLEAR_STATE.BASE
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL.BASE:
      return { ...state, loadingTeam: true }
    case actionTypes.GET_ALL.SUCCESS:
      return { ...state, teamsList: action.payload, loadingTeam: false }
    case actionTypes.GET_ALL.FAIL:
      return { ...state, error: action.payload, loadingTeam: false }
    case actionTypes.GET_BY_ID.BASE:
      return { ...state, loadingTeam: true }
    case actionTypes.GET_BY_ID.SUCCESS:
      return { ...state, selected: action.payload, loadingTeam: false }
    case actionTypes.GET_BY_ID.FAIL:
      return { ...state, error: action.payload, loadingTeam: false }
    case actionTypes.CREATE_TEAM.BASE:
      return { ...state, loadingTeam: true }
    case actionTypes.CREATE_TEAM.SUCCESS:
      return { ...state, loadingTeam: false }
    case actionTypes.CREATE_TEAM.FAIL:
      return { ...state, error: action.payload, loadingTeam: false }
    case actionTypes.REQUEST_JOIN_THE_TEAM.BASE:
      return { ...state, loadingTeam: true }
    case actionTypes.REQUEST_JOIN_THE_TEAM.SUCCESS:
      return { ...state, loadingTeam: false }
    case actionTypes.REQUEST_JOIN_THE_TEAM.FAIL:
      return { ...state, error: action.payload, loadingTeam: false }
    case actionTypes.CLEAR_STATE.BASE:
      return INITIAL_STATE
    default:
      return state
  }
}
