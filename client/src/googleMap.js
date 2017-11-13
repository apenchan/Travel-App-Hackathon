import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            // lat: this.props.details.lat,
            // lng: 0
        }

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);

    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         lat: nextProps.lat,
    //         lng: nextProps.lng,
    //     });
    //     console.log(this.state)
    //     console.log(nextProps.lat)
    //     console.log(this.props.lat)
    // }


    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    }

    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }



    render() {
        return (
            <Map google={window.google}
                style={{ width: '70%', height: '70%', position: 'relative' }}
                defaultZoom={15}
                defaultCenter={{lat : this.props.details.lat, lng :  this.props.details.lng}}
                onClick={this.onMapClicked}>


                <Marker onClick={this.onMarkerClick}
                    name={this.props.details.address}
                    position={{ lat: this.props.details.lat, lng: this.props.details.lng }} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.props.details.address}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
};



export default MapContainer