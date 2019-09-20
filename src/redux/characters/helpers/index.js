import { createActionType } from '../../helpers'

const base = 'character'

export const actionTypes = {
  CREATE: createActionType('create', base),
  UPDATE: createActionType('update', base),
  SAVE_ATTRIBUTES: createActionType('save_attributes', base),
  REMOVE_CHARACTER: createActionType('remove_character', base),
  CHANGE_JOB: createActionType('change_job', base),
  BUY_ITEM: createActionType('buy_item', base),
  RECOVERY_CHARACTER: createActionType('recovery_character', base),
  GET_STATS: createActionType('get_stats', base),
  GET_RANKING: createActionType('get_ranking', base),
  ENTER_IN_QUEST: createActionType('enter_in_quest', base),
  LEAVE_FROM_QUEST: createActionType('leave_from_quest', base),
  LEARN_ELEMENT: createActionType('learn_element', base),
  USE_EQUIPMENT: createActionType('use_equipment', base),
  CLEAR_STATE: createActionType('clear_state', base)
}
