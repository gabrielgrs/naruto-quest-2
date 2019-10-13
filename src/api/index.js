import axios from 'axios'
import * as storageHelper from '../helpers/storage'
import { serverUrl } from '../config/enviroments'

export const collections = {
  USERS: 'users',
  CHARACTERS: 'characters',
  MONSTERS: 'enemies',
  ITEMS: 'items',
  equipmentS: 'equipments',
  SKILLS: 'skills',
  BATTLE: 'battle'
}

axios.defaults.baseURL = `${serverUrl}/api`

axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        common: {
          'x-access-token': storageHelper.getItem('token')
        }
      }
    }
  },
  error => {
    if (!storageHelper.getItem('token') && 401 === error.response.status) {
      storageHelper.clearStorage()
      window.location = '/'
    } else {
      return Promise.reject(error)
    }
  }
)

export default axios
