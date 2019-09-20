import { createActionType } from '../../helpers'

const base = 'quest'

export const actionTypes = {
  GET_ALL: createActionType('get_all', base),
  GET_BY_ID: createActionType('get_by_id', base),
  LEAVE_QUEST: createActionType('leave_quest', base),
  CLEAR_STATE: createActionType('clear_state', base)
}
