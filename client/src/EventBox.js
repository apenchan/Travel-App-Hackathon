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
        if (this.props.event.isShown == true) {
            return (

                <div className="col-md-3">
                    <div>
                        <div className="card">

                            <img className="card-img-top" src={this.props.event.PicUrl} alt="place-img" />

                            <div className="card-body">
                                <h2 className="card-title"> {this.props.event.title}</h2>
                                <span className="card-location" >{this.props.event.address}</span> <hr />
               
                                <div className="details">
                                    <Link to={'/moreDetails/' + this.props.event._id}>More Details</Link>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }


}

export default EventBox;
