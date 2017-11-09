import React from 'react';
import axios from 'axios'

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      city: "",
      country: "",
      attendees: 0,
      picture: "",
      date: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }





  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)

 
    axios.post("/event", {
      description: this.state.description,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      city: this.state.city,
      country: this.state.country,
      attendees: this.state.attendees,
      picture: this.state.picture,
      date: this.state.date,
      title: this.state.title
    })
      .then((response) => {
        console.log(response.data);
        this.props.createEvent(response.data);


      }).catch(function (error) {
        console.log(error);
      });

    this.setState({
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      city: "",
      country: "",
      attendees: 0,
      picture: "",
      date: ""
    })
  }





  render() {
    return (
      
      <div className="create-event-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <input className="input" type="text" id="startTime" required="true" value={this.state.startTime} placeholder="Start Time" onChange={this.handleChange} />
            <input className="input" type="text" id="endTime" required="true" value={this.state.endTime} placeholder="End Time" onChange={this.handleChange} />
            <input className="input" type="text" id="title" required="true" value={this.state.title} placeholder="Event Name" onChange={this.handleChange} />
            <input className="input" type="text" id="description" required="true" value={this.state.description} placeholder="Event Description" onChange={this.handleChange} />
            <input className="input" type="text" id="city" required="true" value={this.state.city} placeholder="Enter a City" onChange={this.handleChange} />
            <input className="input" type="text" id="country" required="true" value={this.state.country} placeholder="Event Country" onChange={this.handleChange} />
            <input className="input pic-input" type="text" id="picture" required="true" value={this.state.picture} placeholder="Add a Photo" onChange={this.handleChange} />
            <input className="input" id="date" required="true" value={this.state.date} placeholder="Select a date" onChange={this.handleChange} />
            <input className="input" type="number" required="true" id="attendees" required="true" value={this.state.attendees} min="1" max="10" placeholder="Add the number of attendees" onChange={this.handleChange} />
            <button className="submit-event input" type="submit">Add Event</button>
          </div>
        </form>
      </div>
    )
  }

}

export default CreateEventForm;