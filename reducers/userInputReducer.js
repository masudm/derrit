export default function input(state = {}, action) {
  switch (action.type) {
    case 'input/USER_INPUT': {
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
