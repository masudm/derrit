export default function user(state = {}, action) {
  switch (action.type) {
    case 'user/SIGNUP_USER_ERROR':
    case 'user/LOGIN_USER_ERROR': {
      return {
        ...state,
        error: action.payload,
      }
    }
    case 'user/SIGNUP_USER_REQUEST':
    case 'user/LOGIN_USER_REQUEST': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'user/SIGNUP_USER': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'user/LOGIN_USER': {
      return {
        ...state,
        ...action.payload,
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
