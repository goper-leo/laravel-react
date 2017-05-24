import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const K_WIDTH = 70;
const K_HEIGHT = 40;

class Marker extends Component {

  state = {
      position: 'absolute',
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      border: '1px solid #2ab27b',
      borderRadius: K_HEIGHT,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#8eb4cb',
      fontSize: 14,
      fontWeight: 'bold',
      padding: 4,
      paddingTop: 10
  };

  render() {
    return (
       <div style={this.state}>
          {'$ ' + this.props.text}
       </div>
    );
  }
}
export default class Map extends Component {
    state = {
        center: {lat: 7.103602, lng: 125.641840},
        zoom: 14,
    };

    createMarker = (house) => <Marker lat={house.lat} lng={house.long} text={house.price} />

    createAllMarkers = (houses) => typeof (houses) !== 'undefined' ? houses.map(this.createMarker) : ''

    render() {
        console.log(this.props.houses);
        return (
            <div className="google-map-container">
                <GoogleMapReact
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {this.createAllMarkers(this.props.houses)}

                </GoogleMapReact>
            </div>
        );
    }

}
