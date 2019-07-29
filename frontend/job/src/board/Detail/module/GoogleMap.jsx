import React,{Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {
  render() {

    return (
      <Map google={this.props.google} 
      onClick={this.onMapClicked}
      initialCenter={{
        lat:37.570461,
        lng:126.986390
      }}
      style={{height: '100%', width: '100%'}}
      className={'map'}
      zoom={18}>
        <Marker
          draggable={true}
          title="Location"
          animation= {Animation}
          id={1}
          />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCX4elAhSF-1mAFON3hiV0JrhMmIxLugz4")
})(GoogleMap)