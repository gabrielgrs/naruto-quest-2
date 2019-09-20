export const createActionType = (actionType, prefix) => ({
  BASE: `@${prefix}/${actionType}`,
  SUCCESS: `@${prefix}/${actionType}_success`,
  FAIL: `@${prefix}/${actionType}_fail`
})
