import * as commonApi from '../../api/common'

import {
  onLoadImage as onLoadImageReducer,
  onLoadImageSuccess,
  changeLanguage as changeLanguageReducer,
  getNews as getNewsReducer,
  getNewsSuccess,
  getNewsFail
} from './reducer'

export const onLoadImage = finishedLoader => {
  return async dispatch => {
    dispatch(onLoadImageReducer())
    if (finishedLoader) {
      return dispatch(onLoadImageSuccess())
    }
  }
}

export const getNews = () => {
  return async dispatch => {
    dispatch(getNewsReducer())
    try {
      const { data } = await commonApi.getNews()
      dispatch(getNewsSuccess(data))
    } catch (error) {
      dispatch(getNewsFail(error))
    }
  }
}

export const changeLanguage = language => {
  localStorage.setItem('language', language)
  return async dispatch => dispatch(changeLanguageReducer(language))
}
