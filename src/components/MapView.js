import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";

import { places } from "../assets/coordinates.json";

export default function MapView() {
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [position, setPosition] = useState({
    lat: -35.426541,
    lng: -71.665933,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationAllowed(true);
      },
      (error) => {},
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <>
      <div className="leaflet-container">
        <Map center={position} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers data={places} myPos={locationAllowed && position} />
        </Map>
      </div>
    </>
  );
}
