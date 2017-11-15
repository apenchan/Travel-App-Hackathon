import React, { Component } from 'react';

class ProfileEventsList extends React.Component{
  renderEvents(){
    return this.props.events.map((events, index)=><ProfileDisplay key={index}{...event}/>)
  }
  render(){
    return(
    <div className="events-scroll">
      {this.renderEvents()}
    </div>
    )
  }
}

export default ProfileEventsList;