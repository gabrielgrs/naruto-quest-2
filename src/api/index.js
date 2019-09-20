import axios from 'axios'
import * as storageHelper from '../helpers/storage'

export const collections = {
  USERS: 'users',
  CHARACTERS: 'characters',
  MONSTERS: 'enemies',
  ITEMS: 'items',
  equipmentS: 'equipments',
  SKILLS: 'skills',
  BATTLE: 'battle'
}

const getBaseUrl = () => {
  const port = process.env.PORT || 3003

  if (window.location.href.includes('herokuapp')) {
    console.log('Running homolog environment')
    return 'https://narutoquest.herokuapp.com/api'
  }

  if (window.location.href.includes('localhost')) {
    console.log('Running local environment')
    return `http://localhost:${port}/api`
  }

  if (window.location.href.includes('narutoquest.com')) {
    console.log('Running production enviroment')
    return 'http://narutoquest.com/api'
  }

  throw new Error('Unknown Environment')
}

axios.defaults.baseURL = getBaseUrl()

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
