var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyD0-dvjFhHjmwvh9KuoX6dvWnbTxEuF7Xs",
    authDomain: "https://derrit-3345a.firebaseio.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
};

firebase.initializeApp(config);

module.exports = firebase;