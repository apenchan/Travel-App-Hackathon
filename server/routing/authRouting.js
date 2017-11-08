var passport = require('../models/passport');
var express = require('express');
var router = express.Router();
var User = require("../models/userModel");
var jwt = require('jsonwebtoken');

//the '/users' routes will go here

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.post('/register', function (req, res){
	User.create(req.body, function(err, user){
		if (err) {
			console.log(err)
			res.status(500).end();
    }
    console.log(user);
		res.send(true);
	});
});


//lets get the following back if login is successful. post request ;)
router.post('/login', passport.authenticate('local', {session: false}), function(req, res, next){
	console.log("the login seems to be successful. Let's celebrate");
	console.log('req.body:' + req.body);

	//Expiration check
	var token = jwt.sign(req.user, process.env.JWT_SECRET, {
		expiresIn: 1400
	});

	console.log(token);
	res.json({token: token});
});

router.get('/logout', function(req, res) {
  req.logout();
  res.send('Logged Out');
});

module.exports = router;