import React, { Component } from 'react';
import axios from 'axios'

class EventBox extends Component {



    render() {
        // var getAllEvents = this.getEvents()
        return (
            <div className="col-md-3">
                <div>
                    <div className="card">
                        <div>
                        <img className="card-img-top" src={this.props.event.picture} alt="place-img"/> 
                        </div>
                        <div className="card-body">
                            <h2 className="card-title"> {this.props.event.title}</h2>
                            <span className="card-location">{this.props.event.city}-{this.props.event.country}</span> <hr />
                            <span  className="card-description">{this.props.event.description} </span>
                            <h4 className="card-time"> {this.props.event.startTime} / {this.props.event.endTime} -- {this.props.event.date}</h4>
                            <h4 className="card-attendees"> Max number of people: {this.props.event.attendees}</h4>
                            <a href="#" className="btn btn-primary">More Details</a>


						</div>
					</div>

				</div>

			</div>
		);
	}
}

export default EventBox;
