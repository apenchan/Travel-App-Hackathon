import React from 'react';

class Logout extends React.Component{
  constructor(props){
    super (props);
    this.state={
      loggedIn: true
    }
    this.handleLogoutFormChange = this.handleLogoutFormChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLogoutFormChange(e){
    e.preventDefault()
    sessionStorage.clear();
    this.setState={
      loggedIn: false
    };
  }
  render(){
    return(
      <div className="logout-btn">
        <button onClick={this.handleLogoutFormChange}>logout</button>
      </div>
    )
  }
}

export default Logout