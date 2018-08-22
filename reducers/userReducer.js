export default function user(state = {}, action) {
  switch (action.type) {
    case 'user/ADD_USER_ERROR': {
      return {
        ...state,
        error: action.payload,
      }
    }
    case 'user/ADD_FIREBASE_USER': {
      // split the firebase payload into the user & firebase credential info (prevents having to do user.user)
      let payload = Object.assign({}, action.payload) // eslint-disable-line prefer-const
      delete payload.user
      return {
        ...state,
        ...action.payload.user,
        ...payload,
      }
    }
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
