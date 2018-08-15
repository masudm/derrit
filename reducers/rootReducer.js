import {combineReducers} from 'redux';
import posts from './postsReducer';
import users from './userReducer';

const rootReducer = combineReducers({
  posts: posts,
  users: users
});

export default rootReducer;