import * as notify from './notify'

export const notifyNormalizedMessageError = error => {
  if (error && error.response && error.response.data) {
    if (error.response.data.message) {
      return notify.error(error.response.data.message)
    }
  }

  notify.error(error)
}
