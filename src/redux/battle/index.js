import {
  clearState as clearStateAction,
  enterInBattle as enterInBattleReducer,
  enterInBattleSuccess,
  enterInBattleFail,
  battleAction as battleActionReducer,
  battleActionSuccess,
  battleActionFail,
  leaveBattle as leaveBattleReducer,
  leaveBattleSuccess,
  leaveBattleFail
} from './reducer'
import { getUserByToken } from '../users'
import * as battleCollection from '../../api/battle'
import * as notify from '../../helpers/notify'
import { notifyNormalizedMessageError } from '../../helpers/redux'

export const clearState = () => {
  return dispatch => dispatch(clearStateAction())
}

export const enterInBattle = (character, enemy) => {
  return async dispatch => {
    dispatch(enterInBattleReducer())
    try {
      const data = await battleCollection.enterInbattle({
        characterId: character._id,
        enemyId: enemy._id,
        code: enemy.code
      })

      dispatch(getUserByToken())
      dispatch(enterInBattleSuccess({ data, character, enemy }))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(enterInBattleFail(error))
    }
  }
}

export const battleAction = (battleId, action) => {
  return async dispatch => {
    dispatch(battleActionReducer())
    try {
      const { data } = await battleCollection.battleAction(battleId, { action })
      dispatch(getUserByToken())
      if (data.battleIsFinished) notify.info(data.message)
      dispatch(battleActionSuccess(data))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(battleActionFail(error))
    }
  }
}

export const leaveBattle = () => {
  return async dispatch => {
    dispatch(leaveBattleReducer())
    try {
      const { data } = await battleCollection.leaveBattle()
      dispatch(getUserByToken())
      dispatch(leaveBattleSuccess(data))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(leaveBattleFail(error))
    }
  }
}
