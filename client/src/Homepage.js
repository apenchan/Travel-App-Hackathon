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
    let currentComponent = this;
    axios.get("/event")
        .then(function (response) {
            console.log(response.data);
            // data = response.data
            currentComponent.setState({ events: response.data })
            console.log(currentComponent.state)
            // currentComponent.mapTheEvents()

        }).catch(function (error) {
            console.log(error);
        });
}
  createEvent(event) {
    
  //   this.setState((prevState) => ({
  //     events: prevState.events.concat(structure)
  //   }));
  //   console.log(this.state)
  // };
    this.setState({ events: this.state.events.concat(event) })
    console.log(this.state)
  }




  render() {
    return (
      <div className="main-container">
        {/* <div className="Auth">
          <AuthSuccess/>
          </div> */}
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