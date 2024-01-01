import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import mapIcon from "./../../assets/placeholder.png"

import { Icon, divIcon, point } from "leaflet";

const DeliveryLocaion = () => {
  // create custom icon
  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: mapIcon,
    iconSize: [30, 30], // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  // markers
  const markers = [
    {
      geocode: [23.777176, 90.399452],
      popUp: "Karim Ahmed",
    },
    {
      geocode: [22.83902178764278, 89.53809652939097],
      popUp: "Lucky Smith",
    },
    {
      geocode: [23.60597348448089, 89.83863586499692],
      popUp: "Rahim Ahmed",
    },
    {
      geocode: [24.90396176976791, 91.86100734809978],
      popUp: "Rakib Ali",
    },
    {
      geocode: [22.715246232993717, 90.35188976963539],
      popUp: "Sohan Ahmed",
    },
    {
      geocode: [24.25186560061773, 89.91991598058341],
      popUp: "Rasel Ahmed",
    },
    {
      geocode: [24.746229893639878, 90.41380072354113],
      popUp: "Abu Siam",
    },
  ];
  return (
    <MapContainer center={[23.777176, 90.399452]} zoom={8}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}

      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default DeliveryLocaion;
