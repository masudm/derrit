import * as types from './actionTypes';

export function addUserEmail(email) {
    return {
        type: types.ADD_USER_EMAIL,
        email: email
    }
}

export function addUserToken(token) {
    return {
        type: types.ADD_USER_TOKEN,
        token: token
    }
}