import React from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


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
      startDate: moment(),
      address: 'San Francisco, CA',
      lat: 0,
      lng: 0
    }
    this.onChange = (address) => this.setState({ address })

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
    console.log(this.state)
  }

  handleStartDateChange(date) {
    this.setState({ startDate: date })
  }

  handleEndDateChange(date) {
    this.setState({ endDate: date })
  }


  handleSubmit(e) {
    let that = this;
    e.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(function(latLng){
        let lat = latLng.lat
        let lng = latLng.lng
        console.log(lat +':'+ lng)
        that.setState({ lat: latLng.lat, lng: latLng.lng })
        debugger
        console.log(that.state)

      axios.post("/event", {
      description: that.state.description,
      startTime: that.state.startTime,
      endDate: that.state.endDate._d,
      startDate: that.state.startDate._d,
      city: that.state.city,
      country: that.state.country,
      attendees: that.state.attendees,
      picture: that.state.picture,
      title: that.state.title,
      address: that.state.address,
      lat: that.state.lat,
      lng: that.state.lng,
    })
      .then((response) => {
      that.props.createEvent(response.data);
      that.setState({
      title: "",
      description: "",
      startTime: "",
      endDate: moment(),
      city: "",
      country: "",
      attendees: 0,
      picture: "",
      startDate: moment(),
      address: 'San Francisco, CA',
      lat: 0,
      lng: 0
    })

      }).catch(function (error) {
        console.log(error);
      });
      })
      .catch(error => console.error('Error', error))
  }


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,}

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
            <input  className="input-pic input" type="text" id="picture" required="true" value={this.state.picture} placeholder="Add a Photo" onChange={this.handleChange} />
            <button className="submit-event input" type="submit">Add Event</button>
            <PlacesAutocomplete id='address' onChange={this.handleChange} inputProps={inputProps} />

          </div>
        </form>
      </div>
    )

  }

}

export default CreateEventForm;