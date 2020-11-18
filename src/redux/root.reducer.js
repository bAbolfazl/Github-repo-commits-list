import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import commitReducer from './commit/commit.reducer'

const rootReducer = {
    user: userReducer,
    commit: commitReducer,
}

export default combineReducers(rootReducer)