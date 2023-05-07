import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_MAP_API,
    version: "weekly",
  });

  loader.load().then(() => {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 8,
    });
  });

  return <section id="map" style={{ height: "400px" }} />;
}

export default Map;
