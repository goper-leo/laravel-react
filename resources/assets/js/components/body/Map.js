import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

class Marker extends Component {

  state = {
      position: 'absolute',
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      border: '5px solid #f44336',
      borderRadius: K_HEIGHT,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
  };

  render() {
    return (
       <div style={this.state}>
          {this.props.text}
       </div>
    );
  }
}
export default class Map extends Component {
    state = {
        center: {lat: 7.103602, lng: 125.641840},
        zoom: 14,
    };

    render() {

        return (
            <div className="google-map-container">
                <GoogleMapReact
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    <Marker lat={7.103602} lng={125.641840} text={'A'} />
                    <Marker lat={7.105997} lng={125.650400} text={'B'} />
                </GoogleMapReact>
            </div>
        );
    }

}
