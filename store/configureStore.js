import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

let composeEnhancers = compose

if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-use-before-define
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

export default function configureStore() {
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)))
}
