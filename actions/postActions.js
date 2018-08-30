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
  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  function randomString() {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < 5; i += 1) text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
  }

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
