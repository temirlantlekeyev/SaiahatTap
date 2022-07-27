import React from "react";
import L from "leaflet";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {useState} from "react";
import { coordinatesData } from "../../../Data/AlmatyData";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

const Map = ({ coordinates, currentImgIndex, onMarkerClick }) => {

const position = [ 43.238949, 76.889709];


return (
  <div className="mapcontainer">

    <MapContainer className="map" center={position} zoom={11}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  
      url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=Hmt493mIrKBy7GISD5UY"/>

          {coordinates.map((coordinate) =>(
          <Marker
          key={coordinate.id}
          position={[coordinate.lat, coordinate.long]}
          eventHandlers={{
            click: (e) => {
              onMarkerClick(coordinates, e)
              console.log(e)
            },}}

            >
          </Marker> 
      ))}
   
    </MapContainer>
    </div>
  );
}

export default Map;







//  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  
// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
