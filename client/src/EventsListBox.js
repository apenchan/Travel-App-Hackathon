import React from 'react';
import EventBox from './EventBox';

class EventsListBox extends React.Component {

    mapTheEvents() {
        return this.props.events.map((event, index) => < EventBox key = { index }
            index = { index }
            event = { event } > < /EventBox>

        )
    }

    render() {
        return ( <
            div className = "row" > { this.mapTheEvents() } <
            /div>
        );
    }

}


export default EventsListBox;