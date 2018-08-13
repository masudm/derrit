var express = require('express'); //the express web server dependency
var apiRoutes = express.Router(); //use the router function within express to define the routes
var bodyParser = require('body-parser'); //use the body parser to parse the body request from the client
var firebase = require('../../helpers/firebase');

apiRoutes.get('/', function(req, res) {
    res.send('get user');
});

apiRoutes.post('/', function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    firebase.auth().createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: username,
        disabled: false
    }).then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        //console.log("Successfully created new user:", userRecord);

        res.json({
            success: true
        });
    }).catch(function(error) {
        console.log("Error creating new user:", error);

        res.json({
            success: false
        });
    });
});

module.exports = apiRoutes;