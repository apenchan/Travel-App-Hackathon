import React from 'react';

class ShowUsername extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username: ""
    }
  }
  getUsername(){
    this.setState={
      username: this.props.username
    }
    console.log("HLELELELELELE")
  }
  render(){
    return(
      <div className="username-test">
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}

export default ShowUsername;