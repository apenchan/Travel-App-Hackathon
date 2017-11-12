
import React from 'react';
import axios from 'axios'
import MapContainer from './googleMap';

class DetailsEvent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            thisEvent: {}
        }
    }

    componentWillMount() {
        axios.get("/event/" + this.props.match.params.eventId)
            .then((response) => {
                console.log(response.data);
                this.setState({ thisEvent: response.data })
                console.log(this.state.thisEvent)
            }).catch(function (error) {
                console.log(error);
            });
    }




    render() {
        return (
            <div className="details">

                <img className="card-img-top detail-img" src={this.state.thisEvent.picture} alt="place-img" />

                <div className="card-body-details">
                    <h2 className="card-title"> {this.state.thisEvent.title}</h2>
                    <span className="card-location" > <i className="fa fa-globe" aria-hidden="true"> </i>{this.state.thisEvent.city}-{this.state.thisEvent.country}</span>
                    <span className="card-description"> <i className="fa fa-plus" aria-hidden="true"> </i>{this.state.thisEvent.description} </span>

                    <h4 className="card-time"> <i className="fa fa-clock-o" aria-hidden="true"></i>{this.state.thisEvent.startTime} / {this.state.thisEvent.endTime} -- <i className="fa fa-calendar" aria-hidden="true"></i>{this.state.thisEvent.eventDate} </h4>
                    <h4 className="card-attendees">Max number of people: {this.state.thisEvent.attendees} <button className="btn-join">Join the Event</button></h4>
                
                </div>
                <div className="map">
                    <MapContainer />
                </div>

            </div >
        )
    }

}

export default DetailsEvent;