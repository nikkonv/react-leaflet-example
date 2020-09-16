import React from "react";
import { Marker, Popup } from "react-leaflet";
import MarkerIcon from "./MarkerIcon";

export default function Markers(props) {
  const places = props.data;
  const myPos = props.myPos;
  const markers = places.map((place) => (
    <Marker key={place.name} position={place.geometry} icon={MarkerIcon}>
      <Popup>{place.name}</Popup>
    </Marker>
  ));
  return (
    <>
      {markers}
      {myPos && (
        <Marker position={myPos} icon={MarkerIcon}>
          <Popup>Yo</Popup>
        </Marker>
      )}
    </>
  );
}
