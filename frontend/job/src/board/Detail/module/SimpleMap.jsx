import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

//구글맵 확인해야할 사항
//1.redux로 react-googlemap ..
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.570461,
      lng: 126.986390
    },
    zoom: 18

  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCX4elAhSF-1mAFON3hiV0JrhMmIxLugz4"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.570461}
            lng={126.986390}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;