import { addFirebaseUser } from '../actions/userActions'
import firebase from './firebase'

export default async function isLoggedIn(dispatch) {
  const user = firebase.auth().currentUser
  if (user) {
    await dispatch(addFirebaseUser(user))
    return true
  }
  return false
}
