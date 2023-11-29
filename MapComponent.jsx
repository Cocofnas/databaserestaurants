import React from 'react';

function MapComponent({ location }) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Load from environment
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(location)}`;

  return (
    <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={mapSrc}>
    </iframe>
  );
}

export default MapComponent;
