import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: { name: "10 rue de Valmy" },
        }

        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        console.log(this.state.selectedPlace)
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
                style={{ width: '50%', height: '70%', position: 'relative' }}
                onClick={this.onMapClicked}>

                <Marker onClick={this.onMarkerClick}
                    name={'Event location'}
                    position={{ lat: 48.85661400000001, lng: 2.3522219000000177 }} />

                <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
            </Map>
        )
    }
};


export default GoogleApiWrapper({
    apiKey: "AIzaSyD88syDFjaL4y4-_d-a51I0aCvxyeVyyeU"
})(MapContainer)