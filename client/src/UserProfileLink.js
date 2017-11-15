import React from 'react';
import axios from 'axios';

class UserProfileLink extends React.Component{
  constructor(props){
    super(props);
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
  }
  render(){
    return(
      <div className="get-history">
        <button onClick={this.getHistory}>Profile</button>
      </div>
    )
  }
}

export default UserProfileLink;