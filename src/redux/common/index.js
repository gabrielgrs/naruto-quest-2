import {
  onLoadImage as onLoadImageReducer,
  onLoadImageSuccess
} from './reducer'

export const onLoadImage = finishedLoader => {
  return async dispatch => {
    dispatch(onLoadImageReducer())
    if (finishedLoader) {
      return dispatch(onLoadImageSuccess())
    }
  }
}
