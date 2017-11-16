import React from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: sessionStorage.getItem('jwt') != undefined
    }

    this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLoginFormChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      sessionStorage.setItem('jwt', response.data.token);
      this.setState({
        username: this.props.initialLoginCheck,
        password: this.props.initialLoginCheck,
        loggedIn: true
      })
      console.log('yooooo')
    }).catch(function (error) {
      console.log(error);
    });
    console.log(this.state)
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/' />;
    }
    return (
      <div className="login-form">
        <div className="login-account">
          <div className="login-title"> Login</div>
          <form onSubmit={this.handleSubmit}>
            <ul className="login-vertical">
              <li><input type="text" className="form-control login-control" id="username" required="true" value={this.state.username} placeholder="Username" onChange={this.handleLoginFormChange} /></li>
              <li><input type="password" className="form-control login-control" id="password" required="true" value={this.state.password} placeholder="Password" onChange={this.handleLoginFormChange} /></li>
              <li><button className="submit-event" type="submit">Login</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
};

export default Login;