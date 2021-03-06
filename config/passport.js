var User = require('../models/userModel.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var JwtOpts = {};

var util = require("util");
JwtOpts.jwtFromRequest = function(req) {
  var token = null;
  if (req && req.cookies) {
      token = req.cookies['jwt_token'];
  }
  return token;
};

//Remove this before deploy
JwtOpts.secretOrKey = process.env.JWT_SECRET || "1234";


passport.use(new JwtStrategy(JwtOpts, function(jwt_payload, done) {
    console.log( "JWT PAYLOAD" + util.inspect(jwt_payload));

    User.findOne({username: jwt_payload._doc.username}, function(err, user) {

        if (err) {
            return done(err, false);
        }

        if (user) {
            console.log("user is " + user.username)
            done(null, user);
        } else {
            done(null, false);
        }
    });
}));

passport.use( new LocalStrategy(
  function(username, password, done ) {
    console.log('I got this')
    User.findOne({ username: username }, function( err, dbUser ) {
      if (err) { 
        return done(err); }
      if (!dbUser) {
        return done(null, false);
      }
      if (!dbUser.authenticate(password)) {
        return done(null, false);
      }

      return done(null, dbUser);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// passport.use(User.createStrategy()); // local strategy
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


module.exports = passport;