import { createActionType } from '../../helpers'

const base = 'battle'

export const actionTypes = {
  CLEAR_STATE: createActionType('clear_state', base),
  ENTER_IN_BATTLE: createActionType('enter_in_battle', base),
  LEAVE_BATTLE: createActionType('leave_battle', base),
  BATTLE_ACTION: createActionType('battle_action', base)
}
