var express = require('express'); //the express web server dependency
var apiRoutes = express.Router(); //use the router function within express to define the routes
var bodyParser = require('body-parser'); //use the body parser to parse the body request from the client
var firebaseAdmin = require('../../helpers/firebaseAdmin');
var firebase = require('../../helpers/firebase');

apiRoutes.get('/', function(req, res) {
    let uid = req.query.uid;

    firebaseAdmin.auth().getUser(uid)
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.

            return res.json({
                success: true,
                user: userRecord.toJSON()
            });
        })
        .catch(function(error) {
            console.log("Error fetching user data:", error);

            return res.json({
                success: false
            });
        });
});

apiRoutes.post('/', function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    firebaseAdmin.auth().createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: username,
        disabled: false
    })
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            //console.log("Successfully created new user:", userRecord);

            return res.json({
                success: true
            });
        })
        .catch(function(error) {
            console.log("Error creating new user:", error);

            return res.json({
                success: false
            });
        });
});

apiRoutes.post('/login', function(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            return res.json({
                success: true,
                user: user
            });
        })
        .catch((err) => {
            console.log(err);
            return res.json({
                success: false
            });
        })
});

module.exports = apiRoutes;