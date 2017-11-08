import React from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import moment from 'moment';

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
      date: ""
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
    this.setState({date: date})

  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/event", {
        title: this.state.title,
        description: this.state.description,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        city: this.state.city,
        country: this.state.country,
        attendees: this.state.attendees,
        picture: this.state.picture,
        date: this.state.date._d
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(this.state)
    this
      .props
      .createEvent(this.state);

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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <input
              type="text"
              id="startTime"
              required="true"
              value={this.state.startTime}
              placeholder="Start Time"
              onChange={this.handleChange}/>
            <input
              type="text"
              id="endTime"
              required="true"
              value={this.state.endTime}
              placeholder="End Time"
              onChange={this.handleChange}/>
            <input
              type="text"
              id="title"
              required="true"
              value={this.state.title}
              placeholder="Event Name"
              onChange={this.handleChange}/>
            <input
              type="text"
              id="description"
              required="true"
              value={this.state.description}
              placeholder="Event Description"
              onChange={this.handleChange}/>
            <input
              type="text"
              id="city"
              required="true"
              value={this.state.city}
              placeholder="Enter a City"
              onChange={this.handleChange}/>
            <input
              type="text"
              id="country"
              required="true"
              value={this.state.country}
              placeholder="Event Country"
              onChange={this.handleChange}/>
            <input
              type="text"
              id="picture"
              required="true"
              value={this.state.picture}
              placeholder="Add a Photo"
              onChange={this.handleChange}/> {/* <input type="text"  required="true"  placeholder="Select a date" onChange={this.handleChange} /> */}
            <button className="submit-event" type="submit">Add</button>
            <DatePicker
              selected={this.state.date} placeholder="choose date" 
              onSelect={this.handleDataChange} />

          </div>
        </form>
      </div>
    )

  }

}

export default CreateEventForm;