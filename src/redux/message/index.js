import {
  clearState as clearStateAction,
  getAll as getAllReducer,
  getAllSuccess,
  getAllFail,
  sendMessage as sendMessageReducer,
  sendMessageSuccess,
  sendMessageFail
} from './reducer'
import * as messageCollection from '../../api/message'
import * as notify from '../../helpers/notify'

export const getAll = callback => {
  return async dispatch => {
    dispatch(getAllReducer())
    try {
      const { data } = await messageCollection.getAll()
      dispatch(getAllSuccess(data))
      if (callback) callback()
    } catch (error) {
      const message = error && error.response && error.response.message
      notify.error(message)
      dispatch(getAllFail(error))
    }
  }
}

export const sendMessage = ({ message, receiver }, callback) => {
  return async dispatch => {
    dispatch(sendMessageReducer())
    try {
      const data = await messageCollection.sendMessage(message, receiver)
      dispatch(sendMessageSuccess(data))
      if (callback) callback()
    } catch (error) {
      notify.error(error)
      dispatch(sendMessageFail(error))
      if (callback) callback()
    }
  }
}

export const clearState = () => {
  return dispatch => dispatch(clearStateAction())
}
