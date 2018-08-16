import * as types from './actionTypes'

export function getPosts() {
  const posts = [{ title: 'hi' }, { title: 'hi2' }]
  return {
    type: types.GET_POSTS,
    payload: posts,
  }
}
