import _ from 'lodash'

export default function user(state = {}, action) {
  switch (action.type) {
    case 'user/ADD_USER_ERROR': {
      return {
        ...state,
        error: action.payload,
      }
    }
    case 'user/ADD_FIREBASE_USER': {
      // split the firebase payload into two objects: userDetails and credentials
      // this allows flattening of the object (so accessing it won't need you to call `user.user` but rather just `user`)
      let payload = { ...action.payload } // eslint-disable-line prefer-const
      let userDetails = { ...action.payload.user } // eslint-disable-line prefer-const
      let credentials = _.omit(payload, ['user']) // eslint-disable-line prefer-const
      return {
        ...state,
        ...userDetails,
        credentials: { ...credentials },
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
