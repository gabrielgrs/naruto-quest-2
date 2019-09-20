import { createActionType } from '../../helpers'

const base = 'skill'

export const actionTypes = {
  GET_ALL: createActionType('get', base),
  GET_BY_ID: createActionType('get_by_id', base),
  CLEAR_STATE: createActionType('clear_state', base)
}
