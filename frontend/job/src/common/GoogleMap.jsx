import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Location from './image/Location.png'


//구글맵 확인해야할 사항
//1.redux로 react-googlemap ..
 
const AnyReactComponent = ({ text }) => <div style={Im} className="ingeun2">{text}</div>;
 
class GoogleMap extends Component {
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
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}
const Im ={
  backgroundImage: `url(${Location})`,
  backgroundSize:`100% 100%`,
  backgroundRepeat :`no-repeat` 
}
 
export default GoogleMap;