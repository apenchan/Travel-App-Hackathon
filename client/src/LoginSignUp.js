import React from 'react';
import Login from './Login';
import Signup from './Signup'

class LoginSignUp extends React.Component {
  render() {
    return (
      <div className="signup-login-wrapper">
        <div className="login">
          <Login />
        </div>
        <div className="signup">
          <Signup />
        </div>
      </div>
    )
  }
}

export default LoginSignUp