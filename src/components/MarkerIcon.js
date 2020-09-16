import L from "leaflet";

const MarkerIcon = L.icon({
  iconUrl: require("../assets/marker_icon.svg"),
  iconRetinaUrl: require("../assets/marker_icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export default MarkerIcon;
