import React from 'react';
import CreateEventForm from './CreateEventForm'
<<<<<<< HEAD
// import EventsListBox from './EventsListBox'
=======
import EventsListBox from './EventsListBox'
>>>>>>> 14b4eca3eb55f51cf4554596e29713a8c3ffc8c5

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.createEvent = this.createEvent.bind(this);
  }
<<<<<<< HEAD

  createEvent(data) {
    var event ={
      title: data.title,
      description: data.description,
      startTime: data.startTime, 
      endTime: data.endTime, 
      city: data.city, 
      country: data.country, 
      picture: data.picture,
      date: data.date
    }
    this.setState({ events: this.state.events.concat(event) }, function() {
      console.log(this.state.events)
    })
=======
  createEvent(event) {
    var event = {
      title : event.title,
      description: event.description,
      startTime: event.startTime,
      endTime: event.endTime,
      city: event.city,
      country : event.country,
      // attendees:attendees,
      picture: event.picture,
      date:event.date
    }
    this.setState({ events: this.state.events.concat(event) })
    console.log(this.state)
>>>>>>> 14b4eca3eb55f51cf4554596e29713a8c3ffc8c5
  }




  render() {
    return (
      <div className="main-container">
        <div className="create-event-form">
          <CreateEventForm createEvent={this.createEvent}/>
        </div>
        {/* <div className="EventsListBox"> */}
        {/* <EventsListBox event={this.state.events}/> */}
        {/* <EventsListBox/> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Homepage;