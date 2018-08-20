import { combineReducers } from 'redux'
import posts from './postsReducer'
import user from './userReducer'
import userInputReducer from './userInputReducer'

const rootReducer = combineReducers({
  posts: posts,
  user: user,
  input: userInputReducer,
})

export default rootReducer
