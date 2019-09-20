import { combineReducers } from 'redux'
import userReducer from './users/reducer'
import characterReducer from './characters/reducer'
import enemiesReducer from './enemies/reducer'
import battleReducer from './battle/reducer'
import skillReducer from './skills/reducer'
import jobsReducer from './jobs/reducer'
import itemsReducer from './items/reducer'
import equipmentsReducer from './equipments/reducer'
import questReducer from './quest/reducer'
import teamReducer from './team/reducer'
import messageReducer from './message/reducer'
import vipReducer from './vip/reducer'
import commonReducer from './common/reducer'

export const combinedReducers = combineReducers({
  user: userReducer,
  character: characterReducer,
  enemies: enemiesReducer,
  battle: battleReducer,
  skills: skillReducer,
  jobs: jobsReducer,
  items: itemsReducer,
  equipments: equipmentsReducer,
  quest: questReducer,
  team: teamReducer,
  message: messageReducer,
  vip: vipReducer,
  common: commonReducer
})
