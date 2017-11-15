import React, { Component } from 'react';

class ProfileDisplay extends React.Component{
  render(){
    return(
    <div className="profile-display-props">
      {this.props.username}
      <h1> test test test test</h1>
    </div>
    )
  }
}

export default ProfileDisplay;