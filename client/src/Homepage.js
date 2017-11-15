import React from 'react';
import CreateEventForm from './CreateEventForm'
import EventsListBox from './EventsListBox'
import axios from 'axios'
import Logout from './Logout';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: [], 
      currentUser: ''
    };
    this.createEvent = this.createEvent.bind(this);
    this.setEvents = this.setEvents.bind(this);
  }


  componentWillMount() {
    window.scrollTo(0, 0)
    let jwt = sessionStorage.jwt;
    let currentComponent = this;
    axios.get("/event", 
    {headers:{
      "Authorization": "Bearer " + jwt
    }})
        .then(function (response) {
          let userFromServer = response.data.username;
          console.log('hello from the then function --------------')
          console.log(userFromServer)

          
          currentComponent.setState({ 
            events: response.data.allEvents,
            currentUser: userFromServer
          });
          
          console.log(currentComponent.state)
          console.log('-------------------------------------------')

  
        }).catch(function (error) {
          console.log('hello from the catch ----------------------')
          console.log(`error`)
          console.log(error);
          console.log('-------------------------------------------')
        });
}


  createEvent(event) {
    this.setState({ events: this.state.events.concat(event) })
  }



  setEvents(events){    
    this.setState({ events:events});
  }
 


  render() {
    return (
      <div id="homepage" className="main-container">
        ------------------------------
        Welcome
        <h1>{this.state.currentUser}</h1>
        ------------------------------
        <div className="create-event-form">
          <CreateEventForm createEvent={this.createEvent}/>
        </div>   
        <EventsListBox events={this.state.events}/>
      </div>
    );
  }
}


export default Homepage;
