import * as types from './actionTypes';

export function getPosts() {
    let posts = [{title: 'hi'}, {title: 'hi2'}];
    return {
        type: types.GET_POSTS,
        payload: posts
    }
}