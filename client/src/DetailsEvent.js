import React from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import MapContainer from './googleMap';
import NavBar from './navbar';
import Routes from './Routes'
class DetailsEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisEvent: {},
            eventStartDate: null,
            eventStartTime: null,
            eventEndDate: null,
            eventEndTime: null,
        }
    }
    componentWillMount() {
        let jwt = sessionStorage.jwt;
        window.scrollTo(0, 0)
        axios({
            method: "GET",
            url: "/event/" + this.props.match.params.eventId,
            headers: {
                "Authorization": "Bearer " + jwt,
            }
        })
            .then((response) => {
                var startYear = moment(response.data.startDate)._pf.parsedDateParts[0]
                var startMonth = moment(response.data.startDate)._pf.parsedDateParts[2]
                var obl = moment(response.data.startDate)
                var StartDay = moment(response.data.startDate)._pf.parsedDateParts[1]
                var StartHour = moment(response.data.startDate)._pf.parsedDateParts[3]
                var StartMinute = moment(response.data.startDate)._pf.parsedDateParts[4]
                var endYear = moment(response.data.endDate)._pf.parsedDateParts[0]
                var endMonth = moment(response.data.endDate)._pf.parsedDateParts[2]
                var endDay = moment(response.data.endDate)._pf.parsedDateParts[1]
                var EndHour = moment(response.data.endDate)._pf.parsedDateParts[3]
                var EndMinute = moment(response.data.endDate)._pf.parsedDateParts[4]
                if (StartMinute == 0) { StartMinute = '00' }
                if (EndMinute == 0) { EndMinute = '00' }
                var startDate = StartDay + "/" + startMonth + "/" + startYear
                var startTime = (StartHour + 2) + ":" + StartMinute
                var EndDate = endDay + "/" + endMonth + "/" + endYear
                var EndTime = (EndHour + 2) + ":" + EndMinute
                this.setState({
                    thisEvent: response.data,
                    eventStartDate: startDate,
                    eventStartTime: startTime,
                    eventEndTime: EndTime,
                    eventEndDate: EndDate
                })
                console.log(this.state)

            }).catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (

            <div className="details">
                <NavBar />
                <img className="card-img-top detail-img" src={this.state.thisEvent.picture} alt="place-img" />

                <div className="card-body-details">
                    <h2 className="card-title"> {this.state.thisEvent.title}</h2>
                    <span className="card-location" > <i className="fa fa-globe" aria-hidden="true"> </i>{this.state.thisEvent.address}</span>
                    <span className="card-description"> <i className="fa fa-plus" aria-hidden="true"> </i>{this.state.thisEvent.description} </span>
                    <br /><h4 className="card-time"><i className="fa fa-calendar" aria-hidden="true"></i>{this.state.thisEvent.eventDate} Start time :{this.state.eventStartDate} <i className="fa fa-clock-o" aria-hidden="true"></i> {this.state.eventStartTime}</h4>
                    <h4 className="card-time"><i className="fa fa-calendar" aria-hidden="true"></i>{this.state.thisEvent.eventDate} End time : {this.state.eventEndDate} <i className="fa fa-clock-o" aria-hidden="true"></i> {this.state.eventEndTime}</h4>
                    <h4 className="card-attendees">Max number of people: {this.state.thisEvent.attendees}</h4> <br />
                    <button className="btn-join">Join the Event</button>
                </div>

                <div className="map">
                    <MapContainer details={this.state.thisEvent} />
                </div>
            </div>
        )
    }
}
export default DetailsEvent;