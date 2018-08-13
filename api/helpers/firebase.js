var admin = require("firebase-admin");

var serviceAccount = require("../../firebasekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://derrit-3345a.firebaseio.com"
});

module.exports = admin;