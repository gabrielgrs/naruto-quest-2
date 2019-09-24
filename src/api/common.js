import axios from './index'

const BASE = '/base'

export const getNews = () => axios.get(`${BASE}/getNews`)
