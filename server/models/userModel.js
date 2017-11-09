var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
// var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  savedEvents: [String],
  createdEvents: [String]
});

UserSchema.pre('save', function(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

UserSchema.methods.authenticate = function(passwordTry) {
  return  passwordTry ==this.password;
};

var User = mongoose.model("User", UserSchema);

module.exports = User;