import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
  const loader = new Loader({
    apiKey: "YOUR_API_KEY",
    version: "weekly",
  });

  loader.load().then(() => {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 8,
    });
  });

  return <div id="map" style={{ height: "400px" }} />;
}

export default Map;
