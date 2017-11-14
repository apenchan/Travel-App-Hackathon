import React from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Button} from 'react-bootstrap';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      endDate: moment(),
      attendees: 0,
      PicUrl: '',
      startDate: moment(),
      address: '',
      lat: 0,
      lng: 0,
      isShown: true
    }
    this.onChange = (address) => this.setState({address})

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
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state.PicUrl)
  }

  handleStartDateChange(date) {
    this.setState({startDate: date})
  }

  handleEndDateChange(date) {
    this.setState({endDate: date})
  }


  handleSubmit(e) {
    let that = this;
    e.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(function (latLng) {
        let lat = latLng.lat
        let lng = latLng.lng
        that.setState({lat: latLng.lat, lng: latLng.lng})
      })
      //API IMAGE
      .then((response) => {
        var config = {
          headers: {
            'Api-Key': 'dja3ucju77us3f3wb46ucej8'
          }
        };

        axios
          .get(`https://api.gettyimages.com/v3/search/images/creative?minimum_size=xx_large&phrase=${that.state.PicUrl}&page=1&page_size=6&sort_order=most_popular`, config)
          .then((response) => {
            console.log(response.data)
            that.setState({PicUrl: ''})
            console.log(that.state.PicUrl)
            that.setState({PicUrl: response.data.images[0].display_sizes[0].uri})
            console.log(that.state.PicUrl)
            axios
              .post("/event", {
              description: that.state.description,
              endDate: that.state.endDate._d,
              startDate: that.state.startDate._d,
              attendees: that.state.attendees,
              title: that.state.title,
              address: that.state.address,
              lat: that.state.lat,
              lng: that.state.lng,
              PicUrl: that.state.PicUrl,
              isShown: true
            })
              .then((response) => {
                console.log(response.data)
                that
                  .props
                  .createEvent(response.data);
                that.setState({
                  title: "",
                  description: "",
                  endDate: moment(),
                  attendees: 0,
                  picture: "",
                  startDate: moment(),
                  address: '',
                  lat: 0,
                  lng: 0,
                  PicUrl: "",
                  isShown: true
                })
              })
              .catch(function (error) {
                console.log(error);
              });

          })
          .catch(function (error) {
            console.log(error);
          })
      })
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }

    return (

      <div className="create-event-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <div className="inlineDiv">

              <DatePicker
                className="input"
                id="startTime"
                placeholderText="Choose a start time"
                selected={this.state.startDate}
                onChange={this.handleStartDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                withPortal/>

              <DatePicker
                className="input"
                id="endTime"
                placeholder="End Time"
                selected={this.state.endDate}
                onChange={this.handleEndDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                withPortal/>
              <PlacesAutocomplete
                className="input"
                onChange={this.handleChange}
                inputProps={inputProps}/>

            </div>
            <input
              className="input"
              type="text"
              id="title"
              required="true"
              value={this.state.title}
              placeholder="Event Name"
              onChange={this.handleChange}/>
            <input
              className="input"
              type="text"
              id="description"
              required="true"
              value={this.state.description}
              placeholder="Event Description"
              onChange={this.handleChange}/>

            <input
              className="input"
              type="text"
              id="PicUrl"
              required="true"
              value={this.state.PicUrl}
              placeholder="keywords"
              onChange={this.handleChange}/>
            <button className="submit-event input" type="submit">Add Event</button>

          </div>
        </form>
      </div>
    )

  }

}

export default CreateEventForm;