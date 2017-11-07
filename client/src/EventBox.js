import React, {Component} from 'react';

class EventBox extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title"> {this.props.name}</h4>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                            
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default EventBox;
