import {createStore,combineReducers} from 'redux'
import {userReducer,cartReducer} from './Reducers'
let join=combineReducers({userReducer,cartReducer})

export let store =createStore(join)

