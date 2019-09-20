import { actionTypes } from './helpers'

const INITIAL_STATE = {
  list: [],
  loadingCharacter: false,
  ranking: []
}

export const create = () => ({ type: actionTypes.CREATE.BASE })

export const createSuccess = data => ({
  type: actionTypes.CREATE.SUCCESS,
  payload: data
})

export const createFail = error => ({
  type: actionTypes.CREATE.FAIL,
  payload: error
})

export const update = () => ({ type: actionTypes.UPDATE.BASE })

export const updateSuccess = data => ({
  type: actionTypes.UPDATE.SUCCESS,
  payload: data
})

export const updateFail = error => ({
  type: actionTypes.UPDATE.FAIL,
  payload: error
})

export const removeCharacter = () => ({
  type: actionTypes.REMOVE_CHARACTER.BASE
})

export const removeCharacterSuccess = data => ({
  type: actionTypes.REMOVE_CHARACTER.SUCCESS,
  payload: data
})

export const removeCharacterFail = error => ({
  type: actionTypes.REMOVE_CHARACTER.FAIL,
  payload: error
})

export const saveAttributes = () => ({
  type: actionTypes.SAVE_ATTRIBUTES.BASE
})

export const saveAttributesSuccess = data => ({
  type: actionTypes.SAVE_ATTRIBUTES.SUCCESS,
  payload: data
})

export const saveAttributesFail = error => ({
  type: actionTypes.SAVE_ATTRIBUTES.FAIL,
  payload: error
})

export const changeJob = () => ({
  type: actionTypes.CHANGE_JOB.BASE
})

export const changeJobSuccess = data => ({
  type: actionTypes.CHANGE_JOB.SUCCESS,
  payload: data
})

export const changeJobFail = error => ({
  type: actionTypes.CHANGE_JOB.FAIL,
  payload: error
})

export const buyItem = () => ({
  type: actionTypes.BUY_ITEM.BASE
})

export const buyItemSuccess = data => ({
  type: actionTypes.BUY_ITEM.SUCCESS,
  payload: data
})

export const buyItemFail = error => ({
  type: actionTypes.BUY_ITEM.FAIL,
  payload: error
})

export const recoveryCharacter = () => ({
  type: actionTypes.RECOVERY_CHARACTER.BASE
})

export const recoveryCharacterSuccess = data => ({
  type: actionTypes.RECOVERY_CHARACTER.SUCCESS,
  payload: data
})

export const recoveryCharacterFail = error => ({
  type: actionTypes.RECOVERY_CHARACTER.FAIL,
  payload: error
})

export const getRanking = () => ({
  type: actionTypes.GET_RANKING.BASE
})

export const getRankingSuccess = data => ({
  type: actionTypes.GET_RANKING.SUCCESS,
  payload: data
})

export const getRankingFail = error => ({
  type: actionTypes.GET_RANKING.FAIL,
  payload: error
})

export const enterInQuest = () => ({
  type: actionTypes.ENTER_IN_QUEST.BASE
})

export const enterInQuestSuccess = data => ({
  type: actionTypes.ENTER_IN_QUEST.SUCCESS,
  payload: data
})

export const enterInQuestFail = error => ({
  type: actionTypes.ENTER_IN_QUEST.FAIL,
  payload: error
})

export const leaveFromQuest = () => ({
  type: actionTypes.LEAVE_FROM_QUEST.BASE
})

export const leaveFromQuestSuccess = data => ({
  type: actionTypes.LEAVE_FROM_QUEST.SUCCESS,
  payload: data
})

export const leaveFromQuestFail = error => ({
  type: actionTypes.LEAVE_FROM_QUEST.FAIL,
  payload: error
})

export const clearState = () => ({
  type: actionTypes.CLEAR_STATE.BASE
})

export const learnElement = () => ({
  type: actionTypes.LEARN_ELEMENT.BASE
})

export const learnElementSuccess = data => ({
  type: actionTypes.LEARN_ELEMENT.SUCCESS,
  payload: data
})

export const learnElementFail = error => ({
  type: actionTypes.LEARN_ELEMENT.FAIL,
  payload: error
})

export const setEquipment = () => ({
  type: actionTypes.USE_EQUIPMENT.BASE
})

export const setEquipmentSuccess = data => ({
  type: actionTypes.USE_EQUIPMENT.SUCCESS,
  payload: data
})

export const setEquipmentFail = error => ({
  type: actionTypes.USE_EQUIPMENT.FAIL,
  payload: error
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.CREATE.SUCCESS:
      return { ...state, list: action.payload, loadingCharacter: false }
    case actionTypes.CREATE.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.SAVE_ATTRIBUTES.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.SAVE_ATTRIBUTES.SUCCESS:
      return { ...state, selected: action.payload, loadingCharacter: false }
    case actionTypes.SAVE_ATTRIBUTES.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.CHANGE_JOB.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.CHANGE_JOB.SUCCESS:
      return { ...state, selected: action.payload, loadingCharacter: false }
    case actionTypes.CHANGE_JOB.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.REMOVE_CHARACTER.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.REMOVE_CHARACTER.SUCCESS:
      return { ...state, selected: action.payload, loadingCharacter: false }
    case actionTypes.REMOVE_CHARACTER.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.BUY_ITEM.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.BUY_ITEM.SUCCESS:
      return { ...state, loadingCharacter: false }
    case actionTypes.BUY_ITEM.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.RECOVERY_CHARACTER.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.RECOVERY_CHARACTER.SUCCESS:
      return { ...state, loadingCharacter: false }
    case actionTypes.RECOVERY_CHARACTER.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.GET_RANKING.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.GET_RANKING.SUCCESS:
      return { ...state, loadingCharacter: false, ranking: action.payload }
    case actionTypes.GET_RANKING.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.ENTER_IN_QUEST.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.ENTER_IN_QUEST.SUCCESS:
      return { ...state, loadingCharacter: false }
    case actionTypes.ENTER_IN_QUEST.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.LEAVE_FROM_QUEST.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.LEAVE_FROM_QUEST.SUCCESS:
      return { ...state, loadingCharacter: false }
    case actionTypes.LEAVE_FROM_QUEST.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.LEARN_ELEMENT.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.LEARN_ELEMENT.SUCCESS:
      return { ...state, loadingCharacter: false }
    case actionTypes.LEARN_ELEMENT.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.USE_EQUIPMENT.BASE:
      return { ...state, loadingCharacter: true }
    case actionTypes.USE_EQUIPMENT.SUCCESS:
      return { ...state, loadingCharacter: false }
    case actionTypes.USE_EQUIPMENT.FAIL:
      return { ...state, error: action.payload, loadingCharacter: false }
    case actionTypes.CLEAR_STATE.BASE:
      return INITIAL_STATE
    default:
      return state
  }
}
