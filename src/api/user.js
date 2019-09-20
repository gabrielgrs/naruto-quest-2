import axios from './index'

const BASE = '/user'

export const register = data => axios.post(`${BASE}/register`, data)

export const authenticate = data => axios.post(`${BASE}/authenticate`, data)

export const getUserByToken = () => axios.get(`${BASE}/getUserByToken`)

export const createCharacter = data =>
  axios.put(`${BASE}/createCharacter`, data)

export const update = data => axios.put(`${BASE}/selectCharacter`, data)
