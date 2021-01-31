import {createStore, combineReducers} from 'redux'
import {todos} from './todos/'

const reducers = {
    todos
}

const rootReducer = combineReducers((reducers))

export const configureStore = () => createStore(rootReducer)
