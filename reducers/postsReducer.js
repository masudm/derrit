export default function posts(state = [], action) {
  switch (action.type) {
    case 'posts/NEW_POST_REQUEST':
    case 'posts/POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'posts/NEW_POST_ERROR':
    case 'posts/POST_ERROR': {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }
    case 'posts/POST_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      }
    }
    case 'posts/NEW_POST_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
      }
    }
    case 'posts/ADD_NEW_TITLE': {
      return {
        ...state,
        title: action.payload,
      }
    }
    case 'posts/ADD_NEW_BODY': {
      return {
        ...state,
        body: action.payload,
      }
    }
    default:
      return state
  }
}
