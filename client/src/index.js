import React from 'react';
import axios from 'axios';
import Homepage from './Homepage'
// import TestSignup from './TestSignup'
import Login from './Login'
import {Switch, Route, Router, Redirect, browserHistory, history} from 'react-router-dom';

class App extends React.Component {
  componentWillMount(){
    // if we dont have jwt at all no need to check in the server - redirect to login
    let jwt = sessionStorage.jwt;
    const {auth, history, setNextRoute} = this.props
          if (!jwt) {
              history.push('/login')
              // setInterval( () => this.context.router.transitionTo('/login'), 2000);
    }
    axios.get("http://localhost:3000/currentuser", {
      headers:{
        "Authorization": "Bearer " + jwt
      }}
    ).then(function(response){
      console.log(response);
    })

  }
  render() {
    return (
      <div>
        <Homepage/>
        {/* <TestSignup/> */}
        {/* <TestLogin/> */}
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import Homepage from './Homepage'

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <br/>
//         {/* <Register createUser={this.createUser}/> */}
//         <Homepage/>
//       </div>
//     );
//   }
// }

// export default App;

