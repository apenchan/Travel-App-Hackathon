import React from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Button } from 'react-bootstrap';

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
      address : "",
      attendees: 0,
      picture: "",
      date: moment()
    }

  
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleDataChange = this
      .handleDataChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleChange(e) {
    console.log(e.target.id)
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleDataChange(date) {
    this.setState({ date: date })
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
      date: this.state.date._d,
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
      date: moment()
    })
  }

  render() {

    return (

      <div className="create-event-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">

            <input className="input-time input" type="text" id="startTime" required="true" value={this.state.startTime} placeholder="Start Time" onChange={this.handleChange} />
            <input className="input-time input" type="text" id="endTime" required="true" value={this.state.endTime} placeholder="End Time" onChange={this.handleChange} />
            <input className="input" type="text" id="title" required="true" value={this.state.title} placeholder="Event Name" onChange={this.handleChange} />
            <input className="input" type="text" id="description" required="true" value={this.state.description} placeholder="Event Description" onChange={this.handleChange} />
            <input className="input" type="text" id="city" required="true" value={this.state.city} placeholder="Enter a City" onChange={this.handleChange} />
            <input className="input" type="text" id="country" required="true" value={this.state.country} placeholder="Event Country" onChange={this.handleChange} />
            <input  className="input-pic input" type="text" id="picture" required="true" value={this.state.picture} placeholder="Add a Photo" onChange={this.handleChange} />
            <DatePicker
              className="input"
              selected={this.state.date} placeholderText="Choose a date"
              onSelect={this.handleDataChange}
            />
            <button className="submit-event input" type="submit">Add Event</button>

          </div>
        </form>
      </div>
    )

  }

}

export default CreateEventForm;