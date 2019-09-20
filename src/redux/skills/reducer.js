import { actionTypes } from './helpers'

const INITIAL_STATE = {
  list: [],
  selected: {}
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

export const clearState = () => ({
  type: actionTypes.CLEAR_STATE.BASE
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL.SUCCESS:
      return { ...state, list: action.payload }
    case actionTypes.GET_ALL.FAIL:
      return { ...state, error: action.payload }
    case actionTypes.GET_BY_ID.SUCCESS:
      return { ...state, selected: action.payload }
    case actionTypes.GET_BY_ID.FAIL:
      return { ...state, error: action.payload }
    case actionTypes.CLEAR_STATE.BASE:
      return INITIAL_STATE
    default:
      return state
  }
}
