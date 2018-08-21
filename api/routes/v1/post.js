var express = require('express'); //the express web server dependency
var apiRoutes = express.Router(); //use the router function within express to define the routes
var bodyParser = require('body-parser'); //use the body parser to parse the body request from the client
var firebaseAdmin = require('../../helpers/firebaseAdmin');

//setup a db connection to the firestore
var db = firebaseAdmin.firestore();

apiRoutes.get('/', function(req, res) {
    let postId = req.query.postId;

    let post = db.collection('posts').doc(postId);
    let getPost = post.get()
        .then(doc => {
            if (!doc.exists) {
                return res.json({
                    success: false,
                    err: "no post"
                });
            } else {
                return res.json({
                    success: true,
                    post: doc.data()
                });
            }
        })
        .catch(err => {
            return res.json({
                success: false,
            });
        });
});

apiRoutes.post('/', function(req, res) {
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.body.userId;

    let data = {
        title,
        body,
        userId,
        timestamp: new Date
    };
      
    var setDoc = db.collection('posts').add(data)
        .then((ref) => {
            return res.json({
                success: true,
            });
        })
        .catch((err) => {
            console.log(err);
            return res.json({
                success: false,
            });
        });
});

module.exports = apiRoutes;