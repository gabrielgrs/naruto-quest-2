import {
  clearState as clearStateAction,
  create as createReducer,
  createSuccess,
  createFail,
  update as updateReducer,
  updateSuccess,
  updateFail,
  removeCharacter as removeCharacterReducer,
  removeCharacterSuccess,
  removeCharacterFail,
  saveAttributes as saveAttributesReducer,
  saveAttributesSuccess,
  saveAttributesFail,
  buyItem as buyItemReducer,
  buyItemSuccess,
  buyItemFail,
  changeJob as changeJobReducer,
  changeJobSuccess,
  changeJobFail,
  recoveryCharacter as recoveryCharacterReducer,
  recoveryCharacterSuccess,
  recoveryCharacterFail,
  getRanking as getRankingReducer,
  getRankingSuccess,
  getRankingFail,
  enterInQuest as enterInQuestReducer,
  enterInQuestSuccess,
  enterInQuestFail,
  leaveFromQuest as leaveFromQuestReducer,
  leaveFromQuestSuccess,
  leaveFromQuestFail,
  learnElement as learnElementReducer,
  learnElementSuccess,
  learnElementFail,
  setEquipment as setEquipmentReducer,
  setEquipmentSuccess,
  setEquipmentFail
} from './reducer'
import { getUserByToken } from '../users'
import * as charactersCollection from '../../api/character'
import * as notify from '../../helpers/notify'
import { notifyNormalizedMessageError } from '../../helpers/redux'

export const create = (userId, character, callback) => {
  return async dispatch => {
    dispatch(createReducer())
    try {
      const data = await charactersCollection.create({ userId, ...character })
      notify.success('Criação de personagem realizada com sucesso')
      dispatch(getUserByToken())
      dispatch(createSuccess(data))
      if (callback) callback()
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(createFail(error))
    }
  }
}

export const update = (id, data, callback) => {
  return async dispatch => {
    dispatch(updateReducer())
    try {
      await charactersCollection.learnSkill(id, {
        skillPoints: data.skillPoints,
        skill: data.skill
      })
      dispatch(getUserByToken())
      dispatch(updateSuccess({}))
      if (callback) callback()
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(updateFail(data))
      if (callback) callback()
    }
  }
}

export const saveAttributes = (id, data) => {
  return async dispatch => {
    dispatch(saveAttributesReducer())
    try {
      await charactersCollection.setAttributes(id, data)
      dispatch(getUserByToken())
      dispatch(saveAttributesSuccess({}))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(saveAttributesFail(error))
    }
  }
}

export const changeJob = (characterId, jobId) => {
  return async dispatch => {
    dispatch(changeJobReducer())
    try {
      await charactersCollection.changeJob(characterId, { jobId })
      dispatch(getUserByToken())
      dispatch(changeJobSuccess({}))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(changeJobFail(error))
    }
  }
}

export const buyItem = (id, item, quantity) => {
  return async dispatch => {
    dispatch(buyItemReducer())
    try {
      await charactersCollection.buyItem(id, { item, quantity })
      dispatch(getUserByToken())
      dispatch(buyItemSuccess({}))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(buyItemFail(error))
    }
  }
}

export const removeCharacter = id => {
  return async dispatch => {
    dispatch(removeCharacterReducer())
    try {
      const { data } = await charactersCollection.removeCharacter(id)
      dispatch(getUserByToken())
      dispatch(removeCharacterSuccess(data))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(removeCharacterFail(error))
    }
  }
}

export const recoveryCharacter = (characterId, recoveryType) => {
  return async dispatch => {
    dispatch(recoveryCharacterReducer())
    try {
      const { data } = await charactersCollection.recoveryCharacter(
        characterId,
        recoveryType
      )
      dispatch(getUserByToken())
      dispatch(recoveryCharacterSuccess(data))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(recoveryCharacterFail(error))
    }
  }
}

export const getRanking = () => {
  return async dispatch => {
    dispatch(getRankingReducer())
    try {
      const { data } = await charactersCollection.getRanking()

      dispatch(getRankingSuccess(data))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(getRankingFail(error))
    }
  }
}

export const enterInQuest = (quest, callback) => {
  return async dispatch => {
    dispatch(enterInQuestReducer())
    try {
      if (callback) callback(false)
      const { data } = await charactersCollection.enterInQuest(quest)
      dispatch(getUserByToken())
      dispatch(enterInQuestSuccess(data))
    } catch (error) {
      if (callback) callback(true)
      notifyNormalizedMessageError(error)
      dispatch(enterInQuestFail(error))
    }
  }
}

export const leaveFromQuest = callback => {
  return async dispatch => {
    dispatch(leaveFromQuestReducer())
    try {
      const { data } = await charactersCollection.leaveFromQuest()
      callback()
      dispatch(getUserByToken())
      dispatch(leaveFromQuestSuccess(data))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(leaveFromQuestFail(error))
    }
  }
}

export const learnElement = element => {
  return async dispatch => {
    dispatch(learnElementReducer())
    try {
      const { data } = await charactersCollection.learnElement(element)
      dispatch(getUserByToken())
      dispatch(learnElementSuccess(data))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(learnElementFail(error))
    }
  }
}

export const setEquipment = equipment => {
  return async dispatch => {
    dispatch(setEquipmentReducer())
    try {
      const { data } = await charactersCollection.setEquipment(equipment)
      dispatch(getUserByToken())
      dispatch(setEquipmentSuccess(data))
    } catch (error) {
      notifyNormalizedMessageError(error)
      dispatch(setEquipmentFail(error))
    }
  }
}

export const clearState = () => {
  return dispatch => dispatch(clearStateAction())
}
