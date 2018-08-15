import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

let composeEnhancers = compose

if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

export default function configureStore() {
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)))
}
