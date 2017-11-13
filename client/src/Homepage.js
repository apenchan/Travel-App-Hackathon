import React from 'react';
import CreateEventForm from './CreateEventForm'
import EventsListBox from './EventsListBox'
import axios from 'axios'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.createEvent = this.createEvent.bind(this);
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
  }




  render() {
    return (

      <div id="homepage" className="main-container">
        <div className="create-event-form">
          <CreateEventForm createEvent={this.createEvent}/>
        </div>
        <div className="EventsListBox">
        <EventsListBox events={this.state.events}/>
        </div>
      </div>
    );
  }
}

export default Homepage;