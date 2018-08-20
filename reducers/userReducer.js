import { ADD_USER_EMAIL, ADD_USER_TOKEN } from '../actions/actionTypes'

export default function user(state = {}, action) {
  switch (action.type) {
    case ADD_USER_EMAIL: {
      return {
        ...state,
        email: action.payload,
      }
    }
    case ADD_USER_TOKEN: {
      return {
        ...state,
        token: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
