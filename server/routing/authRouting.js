var passport = require('../models/passport');
var express = require('express');
var router = express.Router();
var User = require("../models/userModel");
var jwt = require('jsonwebtoken');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var JwtOpts = {};

router.use(passport.initialize());

router.post('/register', function (req, res){
	User.create(req.body, function(err, user){
		if (err) {
			console.log(err)
			res.status(500).end();
    } else {
			console.log(user);
			res.send(user);
		}
	});
});

router.use(passport.authenticate('jwt', { session: false }));

//lets get the following back if login is successful. post request ;)
router.post('/login', passport.authenticate('local', {session: false}), function(req, res, next){
	console.log("the login seems to be successful. Let's celebrate");
	console.log('req.body:' + req.body);
	console.log(req.body.username)

	JwtOpts.jwtFromRequest = function(req){
    var token = null
    if(req && req.cookies){
      token = req.cookies['jwt_token'];
    }
    return token;
  };
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