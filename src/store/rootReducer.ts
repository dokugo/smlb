import { combineReducers } from 'redux'

import salaryReducer from './salary/reducer'

const rootReducer = combineReducers({
  salary: salaryReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
