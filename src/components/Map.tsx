import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Navigation, ExternalLink } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const lat = 1.0134828658323154;
  const lng = 34.99840230602531;

  // Google Maps link for "Get Directions"
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  // Google Maps view link
  const viewMapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="w-full space-y-4">
      {/* Map Display */}
      <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={[lat, lng]}
          zoom={15}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>
              <div className="text-center">
                <strong className="text-sm font-semibold">TNT DT Sacco Head Office</strong>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={viewMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow text-navy rounded-lg hover:bg-yellow/90 transition-colors text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg"
        >
          <ExternalLink className="h-4 w-4" />
          View on Google Maps
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg"
        >
          <Navigation className="h-4 w-4" />
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default Map;