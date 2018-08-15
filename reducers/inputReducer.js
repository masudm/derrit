import {INPUT} from '../actions/actionTypes';

export default function input(state = {}, action) {
    switch (action.type) {
        case INPUT:
            let curState = state;
            let key = action.payload.key;
            let value = action.payload.value;

            curState[key] = value;
            return curState;
        default:
            return state;
    }
}