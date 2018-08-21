var express = require('express'); //the express web server dependency
var apiRoutes = express.Router(); //use the router function within express to define the routes
var bodyParser = require('body-parser'); //use the body parser to parse the body request from the client
var firebaseAdmin = require('../../helpers/firebaseAdmin');

//setup a db connection to the firestore
var db = firebaseAdmin.firestore();

apiRoutes.get('/', function(req, res) {
    let postsQuery = db.collection('posts').get()
        .then((posts) => {
            let allPosts = [];
            posts.forEach(post => {
                allPosts.push(post.data());
            });
            
            res.json({
                success: true,
                posts: allPosts
            });
        })
        .catch((err) => {
            res.json({
                success: false
            });
        });
});

module.exports = apiRoutes;