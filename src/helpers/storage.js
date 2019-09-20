const storage = localStorage

export const setItem = (key, value) => storage.setItem(key, value)

export const getItem = key => storage.getItem(key)

export const clearStorage = () => storage.clear()
