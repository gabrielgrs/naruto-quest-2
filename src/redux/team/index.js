import {
  clearState as clearStateAction,
  getAll as getAllReducer,
  getAllSuccess,
  getAllFail,
  getById as getByIdReducer,
  getByIdSuccess,
  getByIdFail,
  createTeam as createTeamReducer,
  createTeamSuccess,
  createTeamFail,
  requestJoinTheTeam as requestJoinTheTeamReducer,
  requestJoinTheTeamSuccess,
  requestJoinTheTeamFail
} from './reducer'
import { getUserByToken } from '../../redux/users'
import * as teamsCollection from '../../api/team'
import * as notify from '../../helpers/notify'

export const getAll = teamId => {
  return async dispatch => {
    dispatch(getAllReducer())
    try {
      const { data } = await teamsCollection.getAll()
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
      const data = await teamsCollection.getById(id)

      dispatch(getByIdSuccess(data))
    } catch (error) {
      notify.error(error)
      dispatch(getByIdFail(error))
    }
  }
}

export const createTeam = team => {
  return async dispatch => {
    dispatch(createTeamReducer())
    try {
      const data = await teamsCollection.insert(team)

      notify.success('Time criado com sucesso!')
      dispatch(getUserByToken())
      dispatch(createTeamSuccess(data))
    } catch (error) {
      notify.error(error)
      dispatch(createTeamFail(error))
    }
  }
}

export const requestJoinTheTeam = teamId => {
  return async dispatch => {
    dispatch(requestJoinTheTeamReducer())
    try {
      const data = await teamsCollection.requestJoinTheTeam(teamId)

      notify.success('Time criado com sucesso!')
      dispatch(getUserByToken())
      dispatch(requestJoinTheTeamSuccess(data))
    } catch (error) {
      notify.error(error)
      dispatch(requestJoinTheTeamFail(error))
    }
  }
}

export const clearState = () => {
  return dispatch => dispatch(clearStateAction())
}
