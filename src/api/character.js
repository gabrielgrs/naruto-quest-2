import axios from './index'

const BASE = '/character'

export const create = data => axios.post(`${BASE}/create`, data)

export const learnSkill = (characterId, data) =>
  axios.put(`${BASE}/learnSkill/${characterId}`, data)

export const setAttributes = (characterId, data) =>
  axios.put(`${BASE}/setAttributes/${characterId}`, data)

export const removeCharacter = id =>
  axios.delete(`${BASE}/removeCharacter/${id}`)

export const changeJob = (characterId, data) =>
  axios.put(`${BASE}/changeJob/${characterId}`, data)

export const buyItem = (id, data) => axios.put(`${BASE}/buyItem/${id}`, data)

export const recoveryCharacter = (id, recoveryType) =>
  axios.put(`${BASE}/recoveryCharacter/${id}`, { recoveryType })

export const getRanking = () => axios.get(`${BASE}/getRanking`)

export const enterInQuest = quest =>
  axios.put(`${BASE}/enterInQuest`, { questId: quest._id })

export const leaveFromQuest = () => axios.put(`${BASE}/finishQuest`)

export const learnElement = element =>
  axios.put(`${BASE}/learnElement`, { element })

export const setEquipment = equipment =>
  axios.put(`${BASE}/setEquipment`, { equipment })

export const moveCharacter = (x, y) =>
  axios.put(`${BASE}/moveCharacter`, { x, y })
