import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import { eventiReducer } from "./reducers/eventiReducer.js"
import { teamReducer } from "./reducers/teamReducer"
import { userReducer } from "./reducers/userReducer"

const rootReducer = combineReducers({
    eventiModule: eventiReducer,
    teamModule: teamReducer,
    userModule: userReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
