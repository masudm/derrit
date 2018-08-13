var express = require('express'); //the express web server dependency
var apiRoutes = express.Router(); //use the router function within express to define the routes
var bodyParser = require('body-parser'); //use the body parser to parse the body request from the client
var firebase = require('../../helpers/firebase');

apiRoutes.get('/', function(req, res) {
    res.send('get user');
});

apiRoutes.post('/', function(req, res) {
    firebase.auth().createUser({
        email: "user@example.com",
        emailVerified: false,
        phoneNumber: "+11234567890",
        password: "secretPassword",
        displayName: "John Doe",
        photoURL: "http://www.example.com/12345678/photo.png",
        disabled: false
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully created new user:", userRecord.uid);
        })
        .catch(function(error) {
          console.log("Error creating new user:", error);
        });
});

module.exports = apiRoutes;