import firebase from '../components/firebase'

export function addFirebaseUser(user) {
  return {
    type: 'user/ADD_FIREBASE_USER',
    payload: user,
  }
}

export function addUserError(error) {
  return {
    type: 'user/ADD_USER_ERROR',
    payload: error,
  }
}

export function addUserEmail(email) {
  return {
    type: 'user/ADD_USER_EMAIL',
    payload: email,
  }
}

export function addUserPassword(password) {
  return {
    type: 'user/ADD_USER_PASSWORD',
    payload: password,
  }
}

export function addUsername(username) {
  return {
    type: 'user/ADD_USERNAME',
    payload: username,
  }
}

export function addUserToken(token) {
  return {
    type: 'user/ADD_USER_TOKEN',
    payload: token,
  }
}

export function signup() {
  return async (dispatch, getState) => {
    const email = getState().user.email
    const password = getState().user.password
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      dispatch({ type: 'user/SIGNUP_USER', payload: user })
    } catch (error) {
      dispatch({ type: 'user/ADD_USER_ERROR', payload: error.message })
      throw error
    }
  }
}

export function login() {
  return async (dispatch, getState) => {
    const email = getState().user.email
    const password = getState().user.password
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      dispatch({ type: 'user/LOGIN_USER', payload: user })
    } catch (error) {
      dispatch({ type: 'user/ADD_USER_ERROR', payload: error.message })
      throw error
    }
  }
}
