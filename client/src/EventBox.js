import React, { Component } from 'react';
import axios from 'axios'

class EventBox extends Component {



    render() {
        // var getAllEvents = this.getEvents()
        return (
            <div className="col-md-3">
                <div>
                    <div className="card">
                        {/* <div>
                        <img className="card-img-top" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg'} alt="place-img"/> 
                        </div> */}
                        <div className="card-body">
                            <h2 className="card-title"> {this.props.event.title}</h2>
                            <span className="card-description">{this.props.event.city}-{this.props.event.country}-{this.props.event.description}</span>
                            <h4 className="card-time"> {this.props.event.startTime} / {this.props.event.endTime} -- {this.props.event.date}</h4>
                            <h4 className="card-attendees"> {this.props.event.attendees}</h4>
                            <a href="#" className="btn btn-primary">Button</a>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default EventBox;
