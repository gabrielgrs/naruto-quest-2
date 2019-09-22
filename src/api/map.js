import axios from './index'

const BASE = '/map'

export const getMap = () => axios.get(`${BASE}/getMap`)

export const getByPosition = (x, y) =>
  axios.get(`${BASE}/getByPosition?x=${x}&y=${y}`)
