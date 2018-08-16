import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

let composeEnhancers = compose

if (typeof window !== 'undefined') {
  /*eslint-disable */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  /*eslint-enable */
}

export default function configureStore() {
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)))
}
