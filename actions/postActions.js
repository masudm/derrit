import firebase from '../components/firebase'

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
