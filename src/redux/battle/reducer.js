import { actionTypes } from './helpers'

const INITIAL_STATE = {
  lastBattleAction: {},
  loadingBattle: false
}

export const clearState = () => ({
  type: actionTypes.CLEAR_STATE.BASE
})

export const enterInBattle = () => ({
  type: actionTypes.ENTER_IN_BATTLE.BASE
})

export const enterInBattleSuccess = data => ({
  type: actionTypes.ENTER_IN_BATTLE.SUCCESS,
  payload: data
})

export const enterInBattleFail = error => ({
  type: actionTypes.ENTER_IN_BATTLE.FAIL,
  payload: error
})

export const battleAction = () => ({
  type: actionTypes.BATTLE_ACTION.BASE
})

export const battleActionSuccess = data => ({
  type: actionTypes.BATTLE_ACTION.SUCCESS,
  payload: data
})

export const battleActionFail = error => ({
  type: actionTypes.BATTLE_ACTION.FAIL,
  payload: error
})

export const leaveBattle = () => ({
  type: actionTypes.LEAVE_BATTLE.BASE
})

export const leaveBattleSuccess = data => ({
  type: actionTypes.LEAVE_BATTLE.SUCCESS,
  payload: data
})

export const leaveBattleFail = error => ({
  type: actionTypes.LEAVE_BATTLE.FAIL,
  payload: error
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ENTER_IN_BATTLE.BASE:
      return { ...state, loadingBattle: true }
    case actionTypes.ENTER_IN_BATTLE.SUCCESS:
      return { ...state, ...action.payload, loadingBattle: false }
    case actionTypes.ENTER_IN_BATTLE.FAIL:
      return { ...state, error: action.payload, loadingBattle: false }
    case actionTypes.BATTLE_ACTION.BASE:
      return { ...state, loadingBattle: true }
    case actionTypes.BATTLE_ACTION.SUCCESS:
      return { ...state, ...action.payload, loadingBattle: false }
    case actionTypes.BATTLE_ACTION.FAIL:
      return { ...state, error: action.payload, loadingBattle: false }
    case actionTypes.LEAVE_BATTLE.BASE:
      return { ...state, loadingBattle: true }
    case actionTypes.LEAVE_BATTLE.SUCCESS:
      return { ...state, ...action.payload, loadingBattle: false }
    case actionTypes.LEAVE_BATTLE.FAIL:
      return { ...state, error: action.payload, loadingBattle: false }
    case actionTypes.CLEAR_STATE.BASE:
      return INITIAL_STATE
    default:
      return state
  }
}
