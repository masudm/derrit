import { INPUT } from '../actions/actionTypes'

export default function input(state = {}, action) {
  switch (action.type) {
    case INPUT: {
      const payload = action.payload
      return {
        ...state,
        [payload.key]: payload.value,
      }
    }
    default: {
      return state
    }
  }
}
