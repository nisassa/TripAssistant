import { combineReducers } from 'redux'

import userAuthReducer from './userAuthReducer'
import tripsReducer from './tripsReducer'

export const makeRootReducer = () => {
    return combineReducers({
        userAuthReducer,
        tripsReducer
    })
}

export default makeRootReducer