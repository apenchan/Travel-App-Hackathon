import React from 'react';
import CreateEventForm from './CreateEventForm'
import EventsListBox from './EventsListBox'
import axios from 'axios'
import FilterForm from './FilterForm.js'


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.createEvent = this.createEvent.bind(this);
    this.setEvents = this.setEvents.bind(this);
  }


  componentWillMount() {
    console.log(this.state)
    let currentComponent = this;
    axios.get("/event")
        .then(function (response) {
            console.log(response.data);
            currentComponent.setState({ events: response.data })
            console.log(currentComponent.state)
        }).catch(function (error) {
            console.log(error);
        });
}


  createEvent(event) {
    this.setState({ events: this.state.events.concat(event) })
    console.log(this.state)
  }



  setEvents(events){    
    this.setState({ events:events});
  }
 


  render() {
    return (
      <div className="main-container">
        <div className="create-event-form">
          <CreateEventForm createEvent={this.createEvent}/>
        </div>
        <div className="EventsListBox">      
        <EventsListBox events={this.state.events}/>
        
        </div>
        <FilterForm setEvents={this.setEvents} events={this.state.events} />
      </div>
    );
  }
}


export default Homepage;