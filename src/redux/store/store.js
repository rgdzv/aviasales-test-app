import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { filterReducer } from '../reducers/filterReducer.js'
import { searchIDReducer } from '../reducers/searchIDReducer.js'
import { sorterReducer } from '../reducers/sorterReducer.js'
import { ticketsReducer } from '../reducers/ticketsReducer.js'

const reducers = combineReducers({
  tickets: ticketsReducer,
  searchID: searchIDReducer,
  sorter: sorterReducer,
  filter: filterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
