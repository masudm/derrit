import { INPUT } from '../actions/actionTypes'

export default function input(state = {}, action) {
  switch (action.type) {
    case INPUT: {
      const curState = state
      const key = action.payload.key
      const value = action.payload.value

      curState[key] = value
      return curState
    }
    default: {
      return state
    }
  }
}
