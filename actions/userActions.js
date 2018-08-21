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
