"use client";

import { useEffect, useRef } from "react";

const MapComponent = ({ location, title, coordinates }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map with Leaflet (free alternative to Google Maps)
    if (typeof window !== "undefined" && mapRef.current) {
      // Load Leaflet dynamically
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);

        // Use provided coordinates or default Gujarat coordinates
        const [lat, lng] = coordinates || [23.0225, 72.5714]; // Default to Ahmedabad

        const map = window.L.map(mapRef.current).setView([lat, lng], 15);

        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        ).addTo(map);

        // Custom marker icon
        const customIcon = window.L.divIcon({
          html: `<div style="background-color: #0d6efd; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">🏠</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        window.L.marker([lat, lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(`<b>${title}</b><br>${location}`)
          .openPopup();
      };
      document.head.appendChild(script);
    }
  }, [location, title, coordinates]);

  return (
    <div
      ref={mapRef}
      style={{ height: "400px", width: "100%" }}
      className="rounded"
    />
  );
};

export default MapComponent;
