export function getPosts() {
  const posts = [{ title: 'hi' }, { title: 'hi2' }]
  return {
    type: 'posts/GET_POSTS',
    payload: posts,
  }
}
