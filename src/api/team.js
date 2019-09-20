import axios from './index'

const BASE = '/team'

export const getAll = () => axios.get(`${BASE}/getAll`)

export const getById = id => axios.getById(`${BASE}/getById/${id}`)

export const insert = data => axios.post(`${BASE}/create`, data)

export const requestJoinTheTeam = teamId =>
  axios.post(`${BASE}/requestJoinTheTeam`, { teamId })
