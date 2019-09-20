import {
  clearState as clearStateAction,
  getAll as getAllReducer,
  getAllSuccess,
  getAllFail,
  getById as getByIdReducer,
  getByIdSuccess,
  getByIdFail
} from './reducer'
import * as skillsCollection from '../../api/skills'
import * as notify from '../../helpers/notify'

export const getAll = () => {
  return async dispatch => {
    dispatch(getAllReducer())
    try {
      const { data } = await skillsCollection.getAll()
      dispatch(getAllSuccess(data))
    } catch (error) {
      notify.error(error)
      dispatch(getAllFail(error))
    }
  }
}

export const getById = id => {
  return async dispatch => {
    dispatch(getByIdReducer())
    try {
      const data = await skillsCollection.getById(id)
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
