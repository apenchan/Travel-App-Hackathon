import React from 'react';
import CreateEventForm from './CreateEventForm'
// import EventsListBox from './EventsListBox'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.createEvent = this.createEvent.bind(this);
  }

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