import React from 'react';
import axios from 'axios'

class CreateEventForm extends React.Component {
  constructor (props){
    super(props);
    this.state={ 
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }





  handleChange(e){
    // console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit(e){
    e.preventDefault();
    // axios.post('/event',{
    //   title: this.props.title,
    //   description: this.props.description,
    //   startTime: this.props.startTime, 
    //   endTime: this.props.endTime, 
    //   city: this.props.city, 
    //   country: this.props.country, 
    //   attendees: this.props.attendees, 
    //   picture: this.props.picture,
    //   date: this.props.date
    // }).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
console.log(this.state)
    this.props.createEvent(this.state);



    this.setState({
    title: "",
    description: "",
    startTime: "", 
    endTime: "", 
    city: "", 
    country: "", 
    attendees: 0, 
    picture: "",
    date: ""})
  }





  render(){
    return(
      <div className="create-event-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">
          <input type="text" id="startTime" required="true" value={this.state.startTime} placeholder="Start Time" onChange={this.handleChange} />
          <input type="text" id="endTime" required="true" value={this.state.endTime} placeholder="End Time" onChange={this.handleChange} />
          <input type="text" id="title" required="true" value={this.state.title} placeholder="Event Name" onChange={this.handleChange} />
          <input type="text" id="description" required="true" value={this.state.description} placeholder="Event Description" onChange={this.handleChange} />
          <input type="text" id="city" required="true" value={this.state.city} placeholder="Enter a City" onChange={this.handleChange} />
          <input type="text" id="country" required="true" value={this.state.country} placeholder="Event Country" onChange={this.handleChange} />
          <input type="text" id="picture" required="true" value={this.state.picture} placeholder="Add a Photo" onChange={this.handleChange} />
          <input type="text" id="date" required="true" value={this.state.date} placeholder="Select a date" onChange={this.handleChange} />
          <button className="submit-event" type="submit">Add</button>
          </div>
        </form>
      </div>
    )
  }

}

export default CreateEventForm;