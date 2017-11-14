import React from 'react';
import LoginSignUp from './LoginSignUp';
class Logout extends React.Component{
  constructor(props){
    super (props);
    this.state={
      loggedIn: true
    }
    this.handleLogoutFormChange = this.handleLogoutFormChange.bind(this);
  }


  handleLogoutFormChange(e){
    // e.preventDefault()
    sessionStorage.clear();
    this.setState={
      loggedIn: false
    };
  }

  render(){
    return(
      <div className="logout-btn">
        {this.handleLogoutFormChange()}
        <LoginSignUp/>
      </div>
    )
  }
}

export default Logout