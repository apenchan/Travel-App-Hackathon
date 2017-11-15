import React from 'react';
import axios from 'axios';

class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.initialCreate,
      lastName: this.props.initialCreate,
      username: this.props.initialCreate,
      password: this.props.initialCreate
      // firstName: "",
      // lastName: "",
      // username: "",
      // password: ""
    }
    this.handleSignUpForm= this.handleSignUpForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSignUpForm(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    axios.post("/users/register", {
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
    // this.props.createUser(this.state);
    this.setState({
      // firstName: "",
      // lastName: "",
      // username: "",
      // password: ""
      firstName: this.props.initialCreate,
      lastName: this.props.initialCreate,
      username: this.props.initialCreate,
      password: this.props.initialCreate
    })

  }

  
  render() {
    return (
      <div className="signup-form">
        <div className="create-account">
          <div className="create-title"> Create Acount </div>
          <form onSubmit={this.handleSubmit}>
          <ul className="sign-up-vertical">
            <li><input type="text" className="form-control signup-control" id="firstName" required="true" value={this.state.firstName} placeholder="First Name" onChange={this.handleSignUpForm} /></li>
            <li><input type="text" className="form-control signup-control" id="lastName" required="true" value={this.state.lastName} placeholder="Last Name" onChange={this.handleSignUpForm} /></li>
            <li><input type="text" className="form-control signup-control" id="username" required="true" value={this.state.username} placeholder="Create Username" onChange={this.handleSignUpForm} /></li>
            <li><input type="password" className="form-control signup-control" id="password" required="true" value={this.state.password} placeholder="Create Password" onChange={this.handleSignUpForm} /></li>
            <li><button className="submit-event" type="submit">Create Acount</button></li>
            </ul>
          </form>
        </div>
      </div>
    )
  } 
}

export default Signup;