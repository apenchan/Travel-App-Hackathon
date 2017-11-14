var express = require ('express');
var router = express.Router();
var passport = require('../config/passport.js');
var User = require('../models/userModel.js');
var jwt = require('jsonwebtoken');
const validator = require('validator');

//Start passport
router.use(passport.initialize());

// router.post('/login', (req, res) => {
//   const validationResult = validateLoginForm(req.body);
//   if (!validationResult.success) {
//     return res.status(400).json({
//       success: false,
//       message: validationResult.message,
//       errors: validationResult.errors
//     });
//   }

//   return res.status(200).end();
// });

router.post('/login', passport.authenticate('local', { session: false }), function(req, res, next) {
	console.log('••••••••••••••••••••••');
	console.log('LOG IN AS ' + req.user.username );
	console.log('••••••••••••••••••••••');

  // Maybe don't sign with entire user
	var token = jwt.sign({user: req.user.username}, process.env.JWT_SECRET, {expiresIn: '20h'});

	console.log(token);
	res.json({ token: token });

});

//IF ALL ELSE FAils, THE BELOW HAS BEEN WORKING
// router.post('/login', passport.authenticate('local'), function(req, res) {
//   User.findOne({username:req.user.username} , function(err,user){
//     res.send(user);
//   })
// });
//and then ends here

module.exports = router;