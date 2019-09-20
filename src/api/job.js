import axios from './index'

const BASE = '/job'

export const getAll = () => axios.get(`${BASE}/getAll`)

export const getById = id => axios.getById(`${BASE}/getById/${id}`)
