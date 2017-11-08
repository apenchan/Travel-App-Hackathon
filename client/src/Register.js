import React, { Component } from 'react';
import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    }
  }
  handleSignUpForm() {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    axios.post("/register", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    }).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
    console.log(this.state)
    this.props.createUser(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    })
  }
  render() {
    return (
      <div className="signup-form">
        <div className="create-account">
          <h3> Create Acount </h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="firstName" required="true" value={this.state.firstName} placeholder="First Name" onChange={this.handleSignUpForm} />
            <input type="text" id="lastName" required="true" value={this.state.lastName} placeholder="Last Name" onChange={this.handleSignUpForm} />
            <input type="text" id="username" required="true" value={this.state.username} placeholder="Create Username" onChange={this.handleSignUpForm} />
            <input type="text" id="password" required="true" value={this.state.password} placeholder="Create Password" onChange={this.handleSignUpForm} />
            <button className="submit-event" type="submit">Create Acount</button>
          </form>
        </div>
      </div>
    )
  }
}


export default Register
