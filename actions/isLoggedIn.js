import { addFirebaseUser } from './userActions'
import firebase from '../components/firebase'

export default async function isLoggedIn(dispatch) {
  const user = firebase.auth().currentUser
  if (user) {
    await dispatch(addFirebaseUser(user))
    return true
  }
  return false
}
