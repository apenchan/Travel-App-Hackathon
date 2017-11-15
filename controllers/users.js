// var express = require('express');
// var router = express.Router();
// var passport = require('../config/passport.js');
// var User = require('../models/userModel.js');
// // var Events = require('../models/models.js');
// var util = require('util'); 

// //requiring util from passport. this will help check if user is loggedin


// //Let's Create a new user!
// router.post('/register', function (req, res){
// 	User.create(req.body, function(err, user){
// 		if (err) {
// 			console.log(err)
// 			res.status(500).end();
// 		}
// 		res.send(true);
// 	});
// });

// //Route w/ JWT token 
// router.use(passport.authenticate('jwt', { session: false }));

// router.get('/profile', function(req, res, next){
// 	console.log("this user is:" + req.user._id);
// 	User.findById(req.user.id).then(function(user){
// 		console.log(user);
// 		res.send(user);
// 	}); 
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js');
var User = require('../models/userModel.js');
var util = require('util'); 
//requiring util from passport. this will help check if user is loggedin


//Let's Create a new user!
router.post('/register', function (req, res){
	User.create(req.body, function(err, user){
		if (err) {
			console.log(err)
			res.status(500).end();
		}
		res.send(true);
	});
});

//Route w/ JWT token 
router.use(passport.authenticate('jwt', { session: false }));

router.get('/profile', function(req, res, next){
	console.log("this user is:" + req.user._id);
	User.findById(req.user.id).then(function(user){
		res.send(user);
		
	}); 
});

module.exports = router;
