import React from 'react';
import CreateEventForm from './CreateEventForm'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.createEvent = this.createEvent.bind(this);
  }
  createEvent(event) {
    this.setState({ events: this.state.events.concat(event) })
    console.log(this.state.events)
  }
  render() {
    return (
      <div className="main-container">
        <div className="create-event-form">
          <CreateEventForm />
        </div>
        <div className="EventsListBox">
        <EventsListBox event={this.state.events}/>
        </div>
      </div>
    );
  }
}

export default Homepage;