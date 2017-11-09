import React, { Component } from 'react';
import axios from 'axios'

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: this.props.initialLoginCheck,
//       password: this.props.initialLoginCheck,
//       // username: "",
//       // password: ""
//     }
//     this.handleLoginForm = this.handleLoginForm.bind(this);
//     this.loginUser = this.loginUser.bind(this);
//   }
//   handleLoginForm(e) {
//     this.setState({ [e.target.id]: e.target.value })
//   }
//   loginUser() {
//     axios.post("/auth/login", {
//       username: this.state.username,
//       password: this.state.password
//     }).then(function(response){
//       console.log(response.data)
//       Cookies.set('jwt_token', data.token);
//     }).catch(function (error) {
//       console.log(error);
//     });
//     this.props.onChange(data.token)
//     // this.setState({

//     //   // username:"",
//     //   // password:""
//     // });
//   }
//   render() {
//     return (
//       <div className="login-form">
//       <div className="login-account">
//         <h3> Login </h3>
//         {/* <form onSubmit={this.handleSubmit}> */}
//           <input type="text" id="username" required="true" value={this.state.username} placeholder="Username" onChange={this.handleLoginForm} />
//           <input type="text" id="password" required="true" value={this.state.password} placeholder="Create Password" onChange={this.handleLoginForm} />
//           <button onClick={this.loginUser}>Login</button>
//         {/* </form> */}
//       </div>
//     </div>
//     )
//   }
// }

// export default Login

var Login = React.createClass({
  getInitialState: function() {
    return{
      username: this.props.initialLoginCheck,
      password: this.props.initialLoginCheck,
      loginStatus: this.props.initialLoginCheck
    };
  },
  handleLoginFormChange: function(stateName, e) {
    var change= {};
    change[stateName] = e.target.value;
    this.setState(change);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var password = this.state.password.trim();
    this.loginAJAX(username, password);
  },
  loginAJAX: function(username, password) {
      console.log(username, password);
      axios.post("/auth/",{
        username: this.state.username,
        password: this.state.password
      }).then(function (response) {
        console.log(response.data);
        console.log("cookie is set");
        Cookies.set('jwt_token', data.token);
        console.log(data);
        //below will set the cookie to the data it was fed (ie username change)
        this.props.onChange(data.token)
      }).catch(function (error) {
        console.log(error);
      });
  },
  render: function(){
    return(
      <div className="login">
        <div className="login-form">
        <h3>Login </h3>
        <form onSubmit={this.handleSubmit}>
        <input className="username-login-form"
        type="text"
        placeholder="Email"
        value={this.state.username}
        onChange={this.handleLoginFormChange.bind(this,'username')}/>
        <br/>
        <input className="password-login-form"
        type="text"
        placeholder="password"
        value={this.state.password}
        onChange={this.handleLoginFormChange.bind(this,'password')}/>
        <br/>
        <input type="submit"/>
        </form>
        </div>
        </div>
      );
  }
});

export default Login