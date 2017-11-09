import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleLoginForm = this.handleLoginForm.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }
  handleLoginForm(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  loginUser() {
    axios.post("/auth", {
      username: this.state.username,
      password: this.state.password
    }).then(function(response){
      console.log(response.data)
      Cookies.set('jwt_token', data.token);
    }).catch(function (error) {
      console.log(error);
    });
    this.props.loginUser(this.state);
    this.setState({
      username:"",
      password:""
    });
  }
  render() {
    return (
      <div className="login-form">
      <div className="login-account">
        <h3> Login </h3>
        {/* <form onSubmit={this.handleSubmit}> */}
          <input type="text" id="username" required="true" value={this.state.username} placeholder="Username" onChange={this.handleLoginForm} />
          <input type="text" id="password" required="true" value={this.state.password} placeholder="Create Password" onChange={this.handleLoginForm} />
          <button onClick={this.loginUser}>Login</button>
        {/* </form> */}
      </div>
    </div>
    )
  }
}

export default Login