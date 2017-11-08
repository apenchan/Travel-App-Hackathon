<<<<<<< HEAD
// import React, {Component} from 'react';
// import React from 'react';

// class EventBox extends React.Component {
//     render() {
//         return (
//             <div className="col-md-3">
//                 <div>
//                     <div className="card">
//                         <img className="card-img-top" src="..." alt="Card image cap"/>
//                         <div className="card-body">
//                             <h4 className="card-title"> {this.props.name}</h4>
//                             <p className="card-text">Some quick example text.</p>
//                             <a href="#" className="btn btn-primary">Button</a>
                            
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         );
//     }
// }

// export default EventBox;

// import React, { Component } from 'react';


// class EventBox extends Component {
//   render() {
//     return (
//       <div className="comment-box">
//         <div className="comment-text">
//           test test
//         </div>
//       </div>
//     )
//   }
// }

// export default EventBox
=======
import React, { Component } from 'react';

class EventBox extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div>
                    <div className="card">
                        {/* <div>
                        <img className="card-img-top" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg'} alt="place-img"/> 
                        </div> */}
                        <div className="card-body">
                            <h2 className="card-title"> {this.props.title}</h2>
                            <span className="card-description">{this.props.city}-{this.props.country}-{this.props.description}</span>
                            <h4 className="card-time"> {this.props.startTime} / {this.props.endTime} -- {this.props.date}</h4>
                            <h4 className="card-attendees"> {this.props.attendees}</h4>
                            <a href="#" className="btn btn-primary">Button</a>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default EventBox;
>>>>>>> 14b4eca3eb55f51cf4554596e29713a8c3ffc8c5
