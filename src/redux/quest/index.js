import {
  clearState as clearStateAction,
  getAll as getAllReducer,
  getAllSuccess,
  getAllFail,
  getById as getByIdReducer,
  getByIdSuccess,
  getByIdFail,
  leaveQuest as leaveQuestReducer,
  leaveQuestSuccess,
  leaveQuestFail
} from './reducer'
import * as questCollection from '../../api/quest'
import * as notify from '../../helpers/notify'
import { getUserByToken } from '../../redux/users'

export const getAll = () => {
  return async dispatch => {
    dispatch(getAllReducer())
    try {
      const { data } = await questCollection.getAll()
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
      const data = await questCollection.getById(id)

      dispatch(getByIdSuccess(data))
    } catch (error) {
      notify.error(error)
      dispatch(getByIdFail(error))
    }
  }
}

export const leaveQuest = () => {
  return async dispatch => {
    dispatch(leaveQuestReducer())
    try {
      const data = await questCollection.leaveQuest()
      dispatch(getUserByToken())
      dispatch(leaveQuestSuccess(data))
    } catch (error) {
      notify.error(error)
      dispatch(leaveQuestFail(error))
    }
  }
}

export const clearState = () => {
  return dispatch => dispatch(clearStateAction())
}
