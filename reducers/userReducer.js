import { ADD_USER_EMAIL, ADD_USER_TOKEN } from '../actions/actionTypes'

export default function user(state = {}, action) {
  switch (action.type) {
    case ADD_USER_EMAIL: {
      const currentState = { ...state }
      currentState.email = action.payload
      // console.log('add email', action.payload);
      return currentState
    }
    case ADD_USER_TOKEN: {
      console.log('add token', action.payload)
      return state
    }
    default: {
      return state
    }
  }
}
