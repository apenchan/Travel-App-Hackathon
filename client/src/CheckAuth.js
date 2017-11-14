// import React, { Component } from 'react';
// import Login from './Login'
// import Registration from './Registration'

// class CheckAuth extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { authenticatedUser: " " }
//   }
//   cookieCheck() {
//     if (document.cookie) {
//       cookieCheck = true;
//     } else {
//       cookieCheck = '';
//     }
//     return {
//       authenticatedUser: cookieCheck,
//     };
//   }
//   changeLogin() {
//     this.setState({
//       authenticatedUser: true
//     })
//   }
//   handleReset(){
//     this.setState({
//       authenticatedUser: ''
//     });
//   }
//   render(){
//     console.log(this.state.authenticatedUser);
//     if(this.state.authenticatedUser === true){
//     return(
//       <div>
//       <Homepage/>
//     </div>
//     )
//   } else {
//     return(
//       <div className="login-signin-page">
//         <div className="login-signup-container">
//           <h1> Meet travelers like you! </h1>
//           <div className="login-form-initial">
//             <Login initialLoginCheck={this.state.authenticatedUser} onChange={this.changeLogin}/>
//           </div>
//         <div className="create-account-initial">
//           <Register initialCreate={this.state.authenticatedUser} onChange={this.changeLogin}/>
//         </div>
//         </div>
//       </div>
//     )
//     }
//   }
// }