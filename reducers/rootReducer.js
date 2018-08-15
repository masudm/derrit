import { combineReducers } from 'redux'
import posts from './postsReducer'
import user from './userReducer'
import input from './inputReducer'

const rootReducer = combineReducers({
  posts: posts,
  user: user,
  input: input,
})

export default rootReducer
