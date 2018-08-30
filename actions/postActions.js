import firebase from '../components/firebase'
import { randomString } from '../helpers/randomString'

export function getPosts() {
  return async dispatch => {
    dispatch({ type: 'posts/POST_REQUEST' })
    try {
      firebase
        .database()
        .ref('posts/')
        .on('value', snapshot => {
          const posts = snapshot.val()
          dispatch({ type: 'posts/POST_SUCCESS', payload: posts })
        })
    } catch (error) {
      dispatch({ type: 'posts/POST_ERROR', payload: error.message })
      throw error
    }
  }
}

export function addNewTitle(title) {
  return {
    type: 'posts/ADD_NEW_TITLE',
    payload: title,
  }
}

export function addNewBody(body) {
  return {
    type: 'posts/ADD_NEW_BODY',
    payload: body,
  }
}

export function createPost() {
  return async (dispatch, getState) => {
    dispatch({ type: 'posts/NEW_POST_REQUEST' })
    try {
      firebase
        .database()
        .ref(`posts/${randomString()}`)
        .set({
          body: getState().posts.body,
          title: getState().posts.title,
          timestamp: Date.now(),
          userId: firebase.auth().currentUser.uid,
        })

      dispatch({ type: 'posts/NEW_POST_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'posts/NEW_POST_ERROR', payload: error.message })
      throw error
    }
  }
}
