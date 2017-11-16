import React from 'react';
import Login from './Login';
import Signup from './Signup';
import TravelerLogo from './TravelerLogo';

class LoginSignUp extends React.Component {
  render() {
    return (
      <div className="main-login-container">
      <TravelerLogo />
      <div className="signup-login-wrapper">
        <div className="login">
          <Login />
        </div>
        <div className="signup">
          <Signup />
        </div>
      </div>
      </div>
    )
  }
}

export default LoginSignUp