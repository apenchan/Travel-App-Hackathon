import React from 'react';
// import axios from 'axios';
// import Login from './Login';
// import Homepage from './Homepage';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username: "",
      savedEvents: []
    }
    this.getHistory = this.getHistory.bind(this);
  }    
  getHistory() {
        let jwt = sessionStorage.jwt;
        // window.scrollTo(0, 0)
        axios({
            method: "GET",
            url: "/users/profile/",
            // data: response,
            headers:{ "Authorization": "Bearer " + jwt,
            }
          }).then(function(response){
            this.props.handleHistory(data);
            console.log(this.state)
          }).catch(function(err){
            console.log(err)
          });
          console.log(this.state);
          // this.setState({username: ""})
    // this.setState({events: this.state.events.concat(event)})
  }
  render(){
    return(
      <div className="user-profile">
        <h1>I am a test {this.props.username}</h1>
      </div>
    )
  }
}

export default UserProfile

