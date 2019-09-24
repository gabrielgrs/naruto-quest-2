import { actionTypes } from './helpers'

const INITIAL_STATE = {
  isLoadingCommon: false,
  newsList: [],
  loadingImage: false,
  language: localStorage.getItem('language') || 'pt',
  theme: 'dark'
}

export const onLoadImage = () => ({
  type: actionTypes.ON_LOAD_IMAGE.BASE
})

export const onLoadImageSuccess = () => ({
  type: actionTypes.ON_LOAD_IMAGE.SUCCESS
})

export const onLoadImageFail = () => ({ type: actionTypes.ON_LOAD_IMAGE.FAIL })

export const changeLanguage = language => ({
  type: actionTypes.CHANGE_LANGUAGE.SUCCESS,
  payload: language
})

export const getNews = () => ({ type: actionTypes.GET_NEWS.BASE })

export const getNewsSuccess = data => ({
  type: actionTypes.GET_NEWS.SUCCESS,
  payload: data
})

export const getNewsFail = () => ({ type: actionTypes.GET_NEWS.FAIL })

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ON_LOAD_IMAGE.BASE:
      return { ...state, loadingImage: true }
    case actionTypes.ON_LOAD_IMAGE.SUCCESS:
      return { ...state, jobsList: action.payload, loadingImage: false }
    case actionTypes.ON_LOAD_IMAGE.FAIL:
      return { ...state, error: action.payload, loadingImage: false }
    case actionTypes.CHANGE_LANGUAGE.SUCCESS:
      return { ...state, language: action.payload }
    case actionTypes.CHANGE_LANGUAGE.BASE:
      return { ...state }
    case actionTypes.GET_NEWS.BASE:
      return { isLoadingCommon: true }
    case actionTypes.GET_NEWS.SUCCESS:
      return { ...state, newsList: action.payload }
    case actionTypes.GET_NEWS.FAIL:
      return { ...state }

    default:
      return state
  }
}
