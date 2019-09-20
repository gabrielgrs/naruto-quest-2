import axios from './index'

const BASE = '/quest'

export const getAll = () => axios.get(`${BASE}/getAll`)

export const getById = id => axios.getById(`${BASE}/getById/${id}`)

export const leaveQuest = () => axios.put(`${BASE}/leaveQuest`)
