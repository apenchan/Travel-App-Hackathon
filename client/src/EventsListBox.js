// import React from 'react';
// import EventBox from './EventBox';

// class EventsListBox extends React.Component {

//     mapTheEvents() {
//         return this.props.event.map(function (event, index) {
//                 return <EventBox key={index} {...event}>
//                     {event.name}</EventBox>
//             })
//     }

//     render() {
//         return (
//             <div className="row">
//                {this.mapTheEvents()} 
//             </div>
//         );
//     }

// }


// export default EventsListBox;

// import React, { Component } from 'react';
// import EventBox from './EventBox'

// class EventsListBox extends Component{
//   renderEvents(){
//     return this.props.events.map((event, index) => <EventBox key={index}{...event}/>)
//   }
//   render(){
//     return(
//       <div className="comments-scroll">
//         {this.renderEvents()}
//       </div>
//     )
//   }
// }

// export default EventsListBox;