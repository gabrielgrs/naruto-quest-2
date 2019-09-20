import { createActionType } from '../../helpers'

const base = 'team'

export const actionTypes = {
  GET_ALL: createActionType('get_all', base),
  GET_BY_ID: createActionType('get_by_id', base),
  CREATE_TEAM: createActionType('create_team', base),
  REQUEST_JOIN_THE_TEAM: createActionType('request_join_the_team', base),
  CLEAR_STATE: createActionType('clear_state', base)
}
