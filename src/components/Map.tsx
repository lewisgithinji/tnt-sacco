import React from 'react';

const Map = () => {
  const lat = 1.0134422964522352;
  const lng = 34.99839886613383;
  
  // Google Maps embed URL with custom marker
  const googleMapsUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;
  
  return (
    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg bg-muted">
      <iframe
        src={googleMapsUrl}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Transnational Times DT Sacco Head Office Location"
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default Map;