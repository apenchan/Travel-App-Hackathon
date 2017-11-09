import React from 'react'; import Homepage from './Homepage';
import EventBox from './EventBox';
import axios from 'axios'
class EventsListBox extends React.Component {

    mapTheEvents() {
        return this.props.events.map((event, index) => <EventBox key={index} event={event}></EventBox>

        )
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
