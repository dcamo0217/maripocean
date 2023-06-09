import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAYCGKTYryjfymjo6ce90OYAFLbNLP03RE&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      if (window.google) {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 37.7749, lng: -122.4194 }, // Coordenadas del centro del mapa
          zoom: 12, // Nivel de zoom
        });

        // Aquí puedes agregar marcadores al mapa utilizando window.google.maps.Marker
      }
    });
  }, []);

  return _super.call(this) || this;
};

export default Map;
