import React from 'react';
import axios from 'axios';
import {Switch, Route, Redirect} from 'react-router-dom';

class Login extends React.Component{
  constructor(props){
    super(props);
		this.state = {
			username: "",
			password: "",
      loggedIn: sessionStorage.getItem('jwt') !=undefined
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
    }).then((response)=>{
      sessionStorage.setItem('jwt', response.data.token);
      this.setState({
        // username: "",
        // password: ""
        username: this.props.initialLoginCheck,
        password: this.props.initialLoginCheck,
        loggedIn: true
      })
      console.log("work baby work");
      // sessionStorage.setItem('jwt', "true");
      // this.props.changeLog('jwt', response.data.token)
      console.log('yooooo')
      console.log(sessionStorage.jwt);
      //later on pass the current user up to the app component
      // console.log("cookie is set");
      // this.saveItem('id_token', responseData.id_token),
      // Cookies.set('jwt_token', data.token)
    }).catch(function (error) {
      console.log(error);
    });
    console.log(this.state)
  }
	render(){
    if(this.state.loggedIn) {
      return <Redirect to='/'/>;
  }
		return(
      <div className="login-form">
      <div className="login-account">
        <h3> Login Acount </h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="username" required="true" value={this.state.username} placeholder="Username" onChange={this.handleLoginFormChange} />
          <input type="text" id="password" required="true" value={this.state.password} placeholder="Password" onChange={this.handleLoginFormChange} />
          <button className="submit-event" type="submit">Login</button>
        </form>
      </div>
    </div>
			);
	}
};

export default Login;