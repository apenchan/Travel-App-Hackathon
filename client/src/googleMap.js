import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }
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

// RENDERING OF THE MAP IN THE LOCATION CHOSEN,AND THE MARKER IN THE GOOD POSITION
    render() {
        return (
         
            <Map google={window.google}
                style={{ width: '100%', height: '235px'}}
                zoom={15}
                center={new google.maps.LatLng({lat : this.props.details.lat, lng :  this.props.details.lng})}
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