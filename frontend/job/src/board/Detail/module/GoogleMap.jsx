import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Location from './Location.png'
import '../Detail.css'




//구글맵 확인해야할 사항
//1.redux로 react-googlemap ..
 
const AnyReactComponent = ({ text }) => <div style={Im} className="ingeun2">{text}</div>;


 const GoogleMap=({Lo})=>{
    console.log(Object(Lo).latL,Object(Lo).lngL)
    return (
      <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key:"AIzaSyCX4elAhSF-1mAFON3hiV0JrhMmIxLugz4"}}
        defaultCenter={{lat:37.5172363,lng: 127.04732481}}
        defaultZoom={18}
      >
        <AnyReactComponent 
          lat={37.5172363}
          lng={127.04732481}
          text=""
        />
      </GoogleMapReact>
    </div>
    )
}
const Im ={
  backgroundImage: `url(${Location})`,
  backgroundSize:`100% 100%`,
  backgroundRepeat :`no-repeat` 
}
 
export default GoogleMap;