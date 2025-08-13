import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with the specified coordinates
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZS1kZXYiLCJhIjoiY2xtZGJ3cW9wMGdyMzNsbnBqNnRycjdlOSJ9.4P_zfv-VWzgzWjLo4Q6Mbw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [34.99839886613383, 1.0134422964522352], // [longitude, latitude]
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for TNT SACCO Head Office
    new mapboxgl.Marker({
      color: 'hsl(210, 100%, 20%)', // Deep blue from design system
    })
      .setLngLat([34.99839886613383, 1.0134422964522352])
      .setPopup(
        new mapboxgl.Popup({
          offset: 25,
          className: 'custom-popup'
        }).setHTML('<div class="p-2"><strong>Transnational Times DT Sacco Head Office</strong><br>Teachers Plaza, Ground Floor. Kitale</div>')
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;