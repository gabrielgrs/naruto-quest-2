import {
  clearState as clearStateAction,
  getAll as getAllReducer,
  getAllSuccess,
  getAllFail,
  getById as getByIdReducer,
  getByIdSuccess,
  getByIdFail
} from './reducer'
import * as itemsCollection from '../../api/items'
import * as notify from '../../helpers/notify'

export const getAll = () => {
  return async dispatch => {
    dispatch(getAllReducer())
    try {
      const { data } = await itemsCollection.getAll()
      dispatch(getAllSuccess(data))
    } catch (error) {
      const message = error && error.response && error.response.message
      notify.error(message)
      dispatch(getAllFail(error))
    }
  }
}

export const getById = id => {
  return async dispatch => {
    dispatch(getByIdReducer())
    try {
      const data = await itemsCollection.getById(id)
      dispatch(getByIdSuccess(data))
    } catch (error) {
      notify.error(error)
      dispatch(getByIdFail(error))
    }
  }
}

export const clearState = () => {
  return dispatch => dispatch(clearStateAction())
}
