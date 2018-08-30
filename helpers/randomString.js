// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
export function randomString() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i += 1) text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
