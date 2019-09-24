import { createActionType } from '../../helpers'

const base = 'common'

export const actionTypes = {
  ON_LOAD_IMAGE: createActionType('on_load_image', base),
  CHANGE_LANGUAGE: createActionType('change_language', base),
  GET_NEWS: createActionType('get_news', base)
}
