import { createActionType } from '../../helpers'

const base = 'users'

export const actionTypes = {
  AUTHENTICATE: createActionType('authenticate', base),
  REGISTER: createActionType('register', base),
  GET_USER_BY_TOKEN: createActionType('get_user_by_token', base),
  CREATE_CHARACTER: createActionType('create_character', base),
  SELECT_CHARACTER: createActionType('select_character', base),
  REMOVE_CHARACTER: createActionType('remove_character', base),
  CLEAR_STATE: createActionType('clear_state', base)
}
