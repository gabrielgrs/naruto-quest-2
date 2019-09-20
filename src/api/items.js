import axios from './index'

const BASE = '/item'

export const getAll = () => axios.get(`${BASE}/getAll`)

export const getById = id => axios.getById(`${BASE}/getById/${id}`)
