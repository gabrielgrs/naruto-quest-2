import axios from './index'

const BASE = '/battle'

export const enterInbattle = data => axios.post(`${BASE}/enterInBattle`, data)

export const battleAction = (id, data) =>
  axios.put(`${BASE}/battleAction/${id}`, data)

export const leaveBattle = () => axios.put(`${BASE}/leaveBattle`)
