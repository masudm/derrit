//dependencies
const express = require('express'); //the express web server dependency
const app = express(); //create a web server using express
const bodyParser = require('body-parser'); //middleware for parsing body requests
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

//config
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

//API routes
//create an instance for routes
var apiRoutes = express.Router();

//middleware - all the routes go through here

//the routes within the base route and what each route does
app.use('/', require('./routes/v1/index'));

//TODO: login middleware
app.use('/post', require('./routes/v1/post'));
app.use('/comment', require('./routes/v1/comment'));
app.use('/user', require('./routes/v1/user'));

app.listen(8000, () => console.log('Derrit server listening on port 3000!'));

