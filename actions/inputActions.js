import * as types from './actionTypes'

export function addInput(key, value) {
  return {
    type: types.USER_INPUT,
    payload: {
      key: key,
      value: value,
    },
  }
}
