import axios from './index'

const BASE = '/common'

export const getNews = () => axios.get(`${BASE}/getNews`)
