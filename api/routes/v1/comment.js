var express = require('express'); //the express web server dependency
var apiRoutes = express.Router(); //use the router function within express to define the routes
var bodyParser = require('body-parser'); //use the body parser to parse the body request from the client

apiRoutes.post('/', function(req, res) {
    res.send('create comment');
});

module.exports = apiRoutes;