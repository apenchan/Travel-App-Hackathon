import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.searchEvent = this.searchEvent.bind(this);
  }
  searchEvent(event) {
    this.setState({ events: this.state.events.concat(event) })
    console.log(this.state.events)
  }
  render() {
    return (
      <div className="main-container">
        <div className="create-event-form">
          <CreateEventForm />
        </div>
        {/* <div className="events-display">
          <EventsListDisplay />
        </div> */}
      </div>
    );
  }
}

export default Homepage;