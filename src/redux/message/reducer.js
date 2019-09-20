import { actionTypes } from './helpers'

const INITIAL_STATE = {
  messageList: [],
  loadingMessage: false
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

export const sendMessage = data => ({
  type: actionTypes.SEND_MESSAGE,
  payload: data
})

export const sendMessageSuccess = data => ({
  type: actionTypes.SEND_MESSAGE.SUCCESS,
  payload: data
})

export const sendMessageFail = () => ({ type: actionTypes.SEND_MESSAGE.FAIL })

export const clearState = () => ({
  type: actionTypes.CLEAR_STATE.BASE
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL.SUCCESS:
      return { ...state, messageList: action.payload }
    case actionTypes.GET_ALL.FAIL:
      return { ...state, error: action.payload }
    case actionTypes.SEND_MESSAGE.SUCCESS:
      return { ...state, selected: action.payload }
    case actionTypes.SEND_MESSAGE.FAIL:
      return { ...state, error: action.payload }
    case actionTypes.CLEAR_STATE.BASE:
      return INITIAL_STATE
    default:
      return state
  }
}
