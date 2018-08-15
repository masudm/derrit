import {ADD_USER_EMAIL, ADD_USER_TOKEN} from '../actions/actionTypes';

export default function users(state = {}, action) {
    switch (action.type) {
        case ADD_USER_EMAIL:
            console.log('add email', action.payload);
            return state;
        case ADD_USER_TOKEN:
            console.log('add token', action.payload);
            return state;
        default:
            return state;
    }
}