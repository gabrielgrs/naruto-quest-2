import {
  clearState as clearStateAction,
  resetAttributes as resetAttributesReducer,
  resetAttributesSuccess,
  resetAttributesFail,
  resetJutsus as resetJutsusReducer,
  resetJutsusSuccess,
  resetJutsusFail,
  changeName as changeNameReducer,
  changeNameSuccess,
  changeNameFail,
  changeVillage as changeVillageReducer,
  changeVillageSuccess,
  changeVillageFail,
  addCharacterSlot as addCharacterSlotReducer,
  addCharacterSlotSuccess,
  addCharacterSlotFail,
  buyRyous as buyRyousReducer,
  buyRyousSuccess,
  buyRyousFail,
  recoveryStamina as recoveryStaminaReducer,
  recoveryStaminaSuccess,
  recoveryStaminaFail,
  recoveryStatus as recoveryStatusReducer,
  recoveryStatusSuccess,
  recoveryStatusFail
} from './reducer'
import * as vipCollection from '../../api/vip'
import { notifyNormalizedMessageError } from '../../helpers/redux'
import { getUserByToken } from '../users'

// TODO
export const resetAttributes = callback => {
  return async dispatch => {
    dispatch(resetAttributesReducer())
    try {
      const { data } = await vipCollection.resetAttributes()
      dispatch(getUserByToken())
      dispatch(resetAttributesSuccess(data))
      if (callback) callback()
    } catch (error) {
      if (callback) callback()
      notifyNormalizedMessageError(error)
      dispatch(resetAttributesFail(error))
    }
  }
}

export const resetJutsus = callback => {
  return async dispatch => {
    dispatch(resetJutsusReducer())
    try {
      const { data } = await vipCollection.resetJutsus()
      dispatch(getUserByToken())
      dispatch(resetJutsusSuccess(data))
      if (callback) callback()
    } catch (error) {
      if (callback) callback()
      notifyNormalizedMessageError(error)
      dispatch(resetJutsusFail(error))
    }
  }
}

export const changeName = (name, callback) => {
  return async dispatch => {
    dispatch(changeNameReducer())
    try {
      const { data } = await vipCollection.changeName(name)
      dispatch(getUserByToken())
      dispatch(changeNameSuccess(data))
      if (callback) callback()
    } catch (error) {
      if (callback) callback()
      notifyNormalizedMessageError(error)
      dispatch(changeNameFail(error))
    }
  }
}

export const changeVillage = (village, callback) => {
  return async dispatch => {
    dispatch(changeVillageReducer())
    try {
      const { data } = await vipCollection.changeVillage(village)
      dispatch(getUserByToken())
      dispatch(changeVillageSuccess(data))
      if (callback) callback()
    } catch (error) {
      if (callback) callback()
      notifyNormalizedMessageError(error)
      dispatch(changeVillageFail(error))
    }
  }
}

export const addCharacterSlot = callback => {
  return async dispatch => {
    dispatch(addCharacterSlotReducer())
    try {
      const { data } = await vipCollection.addCharacterSlot()
      dispatch(getUserByToken())
      dispatch(addCharacterSlotSuccess(data))
      if (callback) callback()
    } catch (error) {
      if (callback) callback()
      notifyNormalizedMessageError(error)
      dispatch(addCharacterSlotFail(error))
    }
  }
}

export const buyRyous = (quantity, callback) => {
  return async dispatch => {
    dispatch(buyRyousReducer())
    try {
      const { data } = await vipCollection.buyRyous(quantity)
      dispatch(getUserByToken())
      dispatch(buyRyousSuccess(data))
      if (callback) callback()
    } catch (error) {
      if (callback) callback()
      notifyNormalizedMessageError(error)
      dispatch(buyRyousFail(error))
    }
  }
}

export const recoveryStamina = callback => {
  return async dispatch => {
    dispatch(recoveryStaminaReducer())
    try {
      const { data } = await vipCollection.recoveryStamina()
      dispatch(getUserByToken())
      dispatch(recoveryStaminaSuccess(data))
      if (callback) callback()
    } catch (error) {
      if (callback) callback()
      notifyNormalizedMessageError(error)
      dispatch(recoveryStaminaFail(error))
    }
  }
}

export const recoveryStatus = callback => {
  return async dispatch => {
    dispatch(recoveryStatusReducer())
    try {
      const { data } = await vipCollection.recoveryStatus()
      dispatch(getUserByToken())
      dispatch(recoveryStatusSuccess(data))
      if (callback) callback()
    } catch (error) {
      if (callback) callback()
      notifyNormalizedMessageError(error)
      dispatch(recoveryStatusFail(error))
    }
  }
}

export const clearState = () => {
  return dispatch => dispatch(clearStateAction())
}
