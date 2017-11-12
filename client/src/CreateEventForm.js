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
      endDate: moment(),
      city: "",
      country: "",
      attendees: 0,
      picture: "",
      startDate: moment()
    }


    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleStartDateChange = this
      .handleStartDateChange
      .bind(this);
    this.handleEndDateChange = this
      .handleEndDateChange
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

  handleStartDateChange(date) {
    this.setState({ startDate: date })
  }

  handleEndDateChange(date) {
    this.setState({ endDate: date })
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
      endDate: this.state.endDate._d,
      startDate: this.state.startDate._d,
      city: this.state.city,
      country: this.state.country,
      attendees: this.state.attendees,
      picture: this.state.picture,
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
      endDate: moment(),
      city: "",
      country: "",
      attendees: 0,
      picture: "",
      startDate: moment()
    })
  }

  render() {

    return (

      <div className="create-event-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <DatePicker className="input" id="startTime" placeholderText="Choose a start time" selected={this.state.startDate} onChange={this.handleStartDateChange}
              showTimeSelect timeFormat="HH:mm" timeIntervals={15} dateFormat="LLL" withPortal />

            <DatePicker className="input" id="endTime" placeholder="End Time" selected={this.state.endDate} onChange={this.handleEndDateChange}
              showTimeSelect timeFormat="HH:mm" timeIntervals={15} dateFormat="LLL" withPortal />

            <input className="input" type="text" id="title" required="true" value={this.state.title} placeholder="Event Name" onChange={this.handleChange} />
            <input className="input" type="text" id="description" required="true" value={this.state.description} placeholder="Event Description" onChange={this.handleChange} />
            <input className="input" type="text" id="city" required="true" value={this.state.city} placeholder="Enter a City" onChange={this.handleChange} />
            <input className="input" type="text" id="country" required="true" value={this.state.country} placeholder="Event Country" onChange={this.handleChange} />
            <input className="input-pic input" type="text" id="picture" required="true" value={this.state.picture} placeholder="Add a Photo" onChange={this.handleChange} />

            <button className="submit-event input" type="submit">Add Event</button>

          </div>
        </form>
      </div>
    )

  }

}

export default CreateEventForm;