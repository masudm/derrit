import * as types from './actionTypes';

export function addInput(key, value) {
    return {
        type: types.INPUT,
        payload: {
            key: key,
            value: value
        }
    }
}