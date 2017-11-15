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
  }

        axios
        .get(`https://api.gettyimages.com/v3/search/images/creative?embed_content_only=true&fields=comp%2Curi_oembed&minimum_size=large&phrase=${that.state.PicUrl}&page=1&page_size=6&sort_order=most_popular`, config)
        .then((response) => {

          console.log(response.data)
          var keyword = that.state.PicUrl
          that.setState({ PicUrl: response.data.images[0].display_sizes[0].uri}, 
          
                function(){
                 console.log( that.state.PicUrl)

                var config2 = {
                headers: {
                'Api-Key': 'ff5sasf7gu9xdyscuhr5967s'
                }}
           
                      axios.get(`https://api.gettyimages.com/v3/search/videos?fields=comp&page_size=3&phrase=eiffel picnic`, config2)
                      .then((response) => {
                        
                      console.log(response.data) 

                      })
                      .catch(function (error) {
                      console.log(error);
                      });
          
        })



  //     })
  //     .catch(error => console.error('Error', error))
  // }

//this closese the .then of the first get request 
          })
         
// this closese the first .then((response) that also changes the header ->
        })

      //this closese the handleSubmit  ->
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

  // .then((response) => {
  // axios.get(`https://api.gettyimages.com/v3/search/videos?fields=comp&page_size
  // = 3&phrase=${that.state.PicUrl}`)                 .then((response) => {
  // console.log(response.data)                 .catch(function (error) {
  // console.log(error);                 })})