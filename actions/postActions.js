import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function getPosts() {
    let posts = [{title: 'hi'}, {title: 'hi2'}];
    return {
        type: types.GET_POSTS,
        posts: posts
    }
}