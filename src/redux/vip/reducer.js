import { actionTypes } from './helpers'

const INITIAL_STATE = {
  loadingVip: false
}

export const resetAttributes = () => ({
  type: actionTypes.RESET_ATTRIBUTES.BASE
})

export const resetAttributesSuccess = data => ({
  type: actionTypes.RESET_ATTRIBUTES.SUCCESS,
  payload: data
})

export const resetAttributesFail = error => ({
  type: actionTypes.RESET_ATTRIBUTES.FAIL,
  payload: error
})

export const resetJutsus = () => ({ type: actionTypes.RESET_JUTSUS.BASE })

export const resetJutsusSuccess = data => ({
  type: actionTypes.RESET_JUTSUS.SUCCESS,
  payload: data
})

export const resetJutsusFail = error => ({
  type: actionTypes.RESET_JUTSUS.FAIL,
  payload: error
})

export const changeName = () => ({ type: actionTypes.CHANGE_NAME.BASE })

export const changeNameSuccess = data => ({
  type: actionTypes.CHANGE_NAME.SUCCESS,
  payload: data
})

export const changeNameFail = error => ({
  type: actionTypes.CHANGE_NAME.FAIL,
  payload: error
})

export const changeVillage = () => ({ type: actionTypes.CHANGE_VILLAGE.BASE })

export const changeVillageSuccess = data => ({
  type: actionTypes.CHANGE_VILLAGE.SUCCESS,
  payload: data
})

export const changeVillageFail = error => ({
  type: actionTypes.CHANGE_VILLAGE.FAIL,
  payload: error
})

export const addCharacterSlot = () => ({
  type: actionTypes.ADD_CHARACTER_SLOT.BASE
})

export const addCharacterSlotSuccess = data => ({
  type: actionTypes.ADD_CHARACTER_SLOT.SUCCESS,
  payload: data
})

export const addCharacterSlotFail = error => ({
  type: actionTypes.ADD_CHARACTER_SLOT.FAIL,
  payload: error
})

export const buyRyous = () => ({ type: actionTypes.BUY_RYOUS.BASE })

export const buyRyousSuccess = data => ({
  type: actionTypes.BUY_RYOUS.SUCCESS,
  payload: data
})

export const buyRyousFail = error => ({
  type: actionTypes.BUY_RYOUS.FAIL,
  payload: error
})

export const recoveryStamina = () => ({
  type: actionTypes.RECOVERY_STAMINA.BASE
})

export const recoveryStaminaSuccess = data => ({
  type: actionTypes.RECOVERY_STAMINA.SUCCESS,
  payload: data
})

export const recoveryStaminaFail = error => ({
  type: actionTypes.RECOVERY_STAMINA.FAIL,
  payload: error
})

export const recoveryStatus = () => ({ type: actionTypes.RECOVERY_STATUS.BASE })

export const recoveryStatusSuccess = data => ({
  type: actionTypes.RECOVERY_STATUS.SUCCESS,
  payload: data
})

export const recoveryStatusFail = error => ({
  type: actionTypes.RECOVERY_STATUS.FAIL,
  payload: error
})

export const clearState = () => ({
  type: actionTypes.CLEAR_STATE
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.RESET_ATTRIBUTES.BASE:
      return { ...state, loadingVip: true, ...action.payload }
    case actionTypes.RESET_ATTRIBUTES.SUCCESS:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.RESET_ATTRIBUTES.FAIL:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.RESET_JUTSUS.BASE:
      return { ...state, loadingVip: true, ...action.payload }
    case actionTypes.RESET_JUTSUS.SUCCESS:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.RESET_JUTSUS.FAIL:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.CHANGE_NAME.BASE:
      return { ...state, loadingVip: true, ...action.payload }
    case actionTypes.CHANGE_NAME.SUCCESS:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.CHANGE_NAME.FAIL:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.CHANGE_VILLAGE.BASE:
      return { ...state, loadingVip: true, ...action.payload }
    case actionTypes.CHANGE_VILLAGE.SUCCESS:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.CHANGE_VILLAGE.FAIL:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.ADD_CHARACTER_SLOT.BASE:
      return { ...state, loadingVip: true, ...action.payload }
    case actionTypes.ADD_CHARACTER_SLOT.SUCCESS:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.ADD_CHARACTER_SLOT.FAIL:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.BUY_RYOUS.BASE:
      return { ...state, loadingVip: true, ...action.payload }
    case actionTypes.BUY_RYOUS.SUCCESS:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.BUY_RYOUS.FAIL:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.RECOVERY_STAMINA.BASE:
      return { ...state, loadingVip: true, ...action.payload }
    case actionTypes.RECOVERY_STAMINA.SUCCESS:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.RECOVERY_STAMINA.FAIL:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.RECOVERY_STATUS.BASE:
      return { ...state, loadingVip: true, ...action.payload }
    case actionTypes.RECOVERY_STATUS.SUCCESS:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.RECOVERY_STATUS.FAIL:
      return { ...state, loadingVip: false, ...action.payload }
    case actionTypes.CLEAR_STATE.BASE:
      return INITIAL_STATE
    default:
      return state
  }
}
