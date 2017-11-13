// var passport = require('../models/passport');
// var express = require('express');
// var router = express.Router();
// var User = require("../models/userModel");
// var jwt = require('jsonwebtoken');
// var JwtStrategy = require('passport-jwt').Strategy;
// var ExtractJwt = require('passport-jwt').ExtractJwt;
// var JwtOpts = {};
// // JwtOpts.secretOrKey = process.env.JWT_SECRET;

// router.use(passport.initialize());

// router.post('/register', function (req, res){
// 	User.create(req.body, function(err, user){
// 		if (err) {
// 			console.log(err)
// 			res.status(500).end();
//     } else {
// 			console.log(user);
// 			res.send(user);
// 		}
// 	});
// });


// router.get('/', function(req,res){
// 	console.log("HELLLLLLLLLLLLLLLLLO")
//   res.send("signing in");
// });
// console.log('------yooooo got to this router thing------')

// //lets get the following back if login is successful. post request ;)
// router.post('/', passport.authenticate('local', {session: false}), function(req, res, next){
// 	console.log("the login seems to be successful. Let's celebrate");
// 	console.log('req.body:' + req.body);
// 	console.log(req.body.username)

// JwtOpts.jwtFromRequest = function(req){
// 	var token = null
// 	if(req && req.cookies){
// 		token = req.cookies['jwt_token'];
// 	}
// 	return token;
// };

// JwtOpts.secretOrKey = require('crypto').randomBytes(32).toString('hex');

// //Expiration check
// var token = jwt.sign(req.user, JwtOpts.secretOrKey, {
// 	expiresIn: 1400
// });

// console.log(token);
// res.json({token: token});
// });

// module.exports = router;