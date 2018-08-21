export default function user(state = {}, action) {
  switch (action.type) {
    case 'user/ADD_USER_EMAIL': {
      return {
        ...state,
        email: action.payload,
      }
    }
    case 'user/ADD_USER_PASSWORD': {
      return {
        ...state,
        password: action.payload,
      }
    }
    case 'user/ADD_USERNAME': {
      return {
        ...state,
        username: action.payload,
      }
    }
    case 'user/ADD_USER_TOKEN': {
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
