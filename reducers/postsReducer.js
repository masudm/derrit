import { GET_POSTS } from '../actions/actionTypes'

export default function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      console.log('getting posts')
      return state
    default:
      return state
  }
}
