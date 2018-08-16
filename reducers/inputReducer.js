import { INPUT } from '../actions/actionTypes'

export default function input(state = {}, action) {
  switch (action.type) {
    case INPUT: {
      const currentState = { ...state }
      const key = action.payload.key
      const value = action.payload.value

      currentState[key] = value
      return currentState
    }
    default: {
      return state
    }
  }
}
