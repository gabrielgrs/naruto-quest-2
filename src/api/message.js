import axios from './index'

const BASE = '/message'

export const getAll = () => axios.get(`${BASE}/getAll`)

export const sendMessage = (message, receiver) =>
  axios.post(`${BASE}/sendMessage`, { message, receiver })
