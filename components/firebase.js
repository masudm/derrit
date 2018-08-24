import firebaseLib from 'firebase'

const config = {
  apiKey: 'AIzaSyD0-dvjFhHjmwvh9KuoX6dvWnbTxEuF7Xs',
  authDomain: 'derrit-3345a.firebaseapp.com',
  databaseURL: 'https://derrit-3345a.firebaseio.com',
  projectId: 'derrit-3345a',
  storageBucket: 'derrit-3345a.appspot.com',
  messagingSenderId: '767399224309',
}

let firebase = null // eslint-disable-line import/no-mutable-exports

if (!firebaseLib.apps.length) {
  firebase = firebaseLib.initializeApp(config)
}

export default firebase
