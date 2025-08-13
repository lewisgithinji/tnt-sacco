import React from 'react';

const Map = () => {
  const lat = 1.0134422964522352;
  const lng = 34.99839886613383;
  const zoom = 15;
  
  // OpenStreetMap embed URL with marker
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lng}`;
  
  return (
    <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg bg-muted">
      <iframe
        src={osmUrl}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Transnational Times DT Sacco Head Office Location"
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

export default Map;