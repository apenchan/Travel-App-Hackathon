// MAKE A ROUTE FROM EVENTBOX TO DETAILSEVENT
// WHEN CLIK THE BTN "MORE DETAILS", REDIRECTING TO DETAILEVENT
//PASS THE INDEX THROUGH EVENTLISTBOX-EVENTBOX-DETAILEVENT --> WHEN THE BTN IS CLICKED,REDIRECT TO THE GOOD INDEX
//APP.GET TO GET THE EVENT/ID
import React from 'react';

class DetailsEvent extends React.Component {

    render() {
        return (
            <div>
                <h1>HEY</h1>
                <h4> {this.props.thisEvent.country}</h4>
            </div>
        )
    }

}
export default DetailsEvent;