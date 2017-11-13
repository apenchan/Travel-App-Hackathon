import React, { Component } from 'react';
import DetailsEvent from './DetailsEvent';
import Routes from './Routes';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios'
class EventBox extends React.Component {
    constructor(props) {
        super(props)
    }






    render() {

        return (

            <div className="col-md-3">
                <div>
                    <div className="card">

                        <img className="card-img-top" src={this.props.event.picture} alt="place-img" />

                        <div className="card-body">
                            <h2 className="card-title"> {this.props.event.title}</h2>
                            <span className="card-location" >{this.props.event.address}</span> <hr /> 
                            
                            {/* <span className="card-location" >{this.props.event.city}-{this.props.event.country}</span> <hr /> */}
                            <span className="card-description">{this.props.event.description} </span>
                            {/* <h4 className="card-time"> Start time :{this.state.eventStartDate} {this.state.eventStartTime}</h4>
                            <h4 className="card-time">End time : {this.state.eventEndDate} {this.state.eventEndTime}</h4>
                            <h4 className="card-attendees"> Max number of people: {this.props.event.attendees}</h4> */}


                            <div className="details">
                                <Link to={'/moreDetails/' + this.props.event._id}>More Details</Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default EventBox;
