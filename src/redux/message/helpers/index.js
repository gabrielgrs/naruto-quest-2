import { createActionType } from '../../helpers'

const base = 'message'

export const actionTypes = {
  GET_ALL: createActionType('get_all', base),
  SEND_MESSAGE: createActionType('SEND_MESSAGE', base),
  CLEAR_STATE: createActionType('clear_state', base)
}
