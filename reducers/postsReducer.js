export default function posts(state = [], action) {
  switch (action.type) {
    case 'posts/POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      }
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
    default:
      return state
  }
}
