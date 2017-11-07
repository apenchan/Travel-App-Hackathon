
import React from 'react';import Homepage from './Homepage';
import EventBox from './EventBox';

class EventsListBox extends React.Component {

    mapTheEvents() {
        return this.props.event.map(function (event, index) {
                return <EventBox key={index} {...event}></EventBox>
            })
    }

    render() {
        return (
            <div className="row">
               {this.mapTheEvents()} 
            </div>
        );
    }

}


export default EventsListBox;
