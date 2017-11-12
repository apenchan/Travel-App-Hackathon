import React, { Component } from 'react';
import DetailsEvent from './DetailsEvent';
import Routes from './Routes';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import  { Redirect } from 'react-router-dom'

import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios'
class EventBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eventDate: null,
            thisEvent: {}
        }
        this.getTheEvent = this.getTheEvent.bind(this)
    }

    //I CREATED AN OBJECT TO HAVE ACCESS TO THE DATE FROM THE DB
    componentWillMount() {
        var time = this.props.event.date
        var year = moment(this.props.event.date)._pf.parsedDateParts[0]
        var month = moment(this.props.event.date)._pf.parsedDateParts[2]
        var day = moment(this.props.event.date)._pf.parsedDateParts[1]
        var date = day + "/" + month + "/" + year
        // console.log(year,month,day,date)
        this.setState({ eventDate: date })
        // console.log(this.state)

    }


    getTheEvent() {
        console.log(this.props.event._id)
        var eventId = this.props.event._id
        console.log("Im clicked")
        axios.get("/event/" + eventId)
            .then((response) => {
                console.log(response.data);
                this.setState({ thisEvent: response.data })
                console.log(this.state.thisEvent)
            }).catch(function (error) {
                console.log(error);
            });
    }



    render() {
        // var input = document.getElementById('autocomplete');
        // var autocomplete = new google.maps.places.Autocomplete(input{types: ['geocode']});
        return (

            <div className="col-md-3">
                <div>
                    <div className="card">

                        <img className="card-img-top" src={this.props.event.picture} alt="place-img" />

                        <div className="card-body">
                            <h2 className="card-title"> {this.props.event.title}</h2>
                            <span className="card-location" >{this.props.event.city}-{this.props.event.country}</span> <hr />
                            <span className="card-description">{this.props.event.description} </span>

                            <h4 className="card-time"> {this.props.event.startTime} / {this.props.event.endTime} -- {this.state.eventDate} </h4>
                            <h4 className="card-attendees"> Max number of people: {this.props.event.attendees}</h4>

                            <BrowserRouter>
                                <div>
                                    <Link href="#" className="btn btn-primary" onClick={this.getTheEvent} to="/moreDetails">More Details</Link>
                                    <Route path="/moreDetails"  render={()=><DetailsEvent thisEvent={this.state.thisEvent}/>} />
                                    
                                </div>
                            </BrowserRouter>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default EventBox;
