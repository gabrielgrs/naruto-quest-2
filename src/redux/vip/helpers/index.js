import { createActionType } from '../../helpers'

const base = 'vip'

export const actionTypes = {
  RESET_ATTRIBUTES: createActionType('reset_attributes', base),
  RESET_JUTSUS: createActionType('reset_jutsus', base),
  CHANGE_NAME: createActionType('change_name', base),
  CHANGE_VILLAGE: createActionType('change_village', base),
  ADD_CHARACTER_SLOT: createActionType('add_character_slot', base),
  BUY_RYOUS: createActionType('buy_ryous', base),
  RECOVERY_STAMINA: createActionType('recovery_stamina', base),
  RECOVERY_STATUS: createActionType('recovery_status', base),
  CLEAR_STATE: createActionType('clear_state', base)
}
