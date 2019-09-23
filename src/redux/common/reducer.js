import { actionTypes } from './helpers'

const INITIAL_STATE = {
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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ON_LOAD_IMAGE.BASE:
      return { ...state, loadingImage: true }
    case actionTypes.ON_LOAD_IMAGE.SUCCESS:
      return { ...state, jobsList: action.payload, loadingImage: false }
    case actionTypes.ON_LOAD_IMAGE.FAIL:
      return { ...state, error: action.payload, loadingImage: false }
    default:
      return state
  }
}
