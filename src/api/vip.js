import axios from './index'

const BASE = '/vip'

export const resetAttributes = () => axios.post(`${BASE}/resetAttributes`)

export const resetJutsus = () => axios.post(`${BASE}/resetJutsus`)

export const changeName = name => axios.post(`${BASE}/changeName`, { name })

export const changeVillage = village =>
  axios.post(`${BASE}/changeVillage`, { village })

export const addCharacterSlot = () => axios.post(`${BASE}/addCharacterSlot`)

export const buyRyous = quantity => axios.post(`${BASE}/buyRyous`, { quantity })

export const recoveryStamina = () => axios.post(`${BASE}/recoveryStamina`)

export const recoveryStatus = () => axios.post(`${BASE}/recoveryStatus`)
