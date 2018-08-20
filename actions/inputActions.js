export function addInput(key, value) {
  return {
    type: 'input/USER_INPUT',
    payload: {
      key: key,
      value: value,
    },
  }
}
