import React, { useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';

const Map = () => {
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({ lat: -25.363, lng: 131.044 });

  const handleMapLoad = (map) => {
    setMap(map);
  };

  const handleMapClick = (event) => {
    if (infoWindow) {
      infoWindow.close();
    }

    const newInfoWindow = new window.google.maps.InfoWindow({
      position: event.latLng,
    });

    newInfoWindow.setContent(JSON.stringify(event.latLng.toJSON(), null, 2));
    newInfoWindow.open(map);

    setInfoWindow(newInfoWindow);
    setMarkerPosition(event.latLng);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDJSKs6IDaipKKoJCt--N1zF0bkE4Zik0M"
      libraries={['places']}
    >
      <GoogleMap
        onLoad={handleMapLoad}
        onClick={handleMapClick}
        center={markerPosition}
        zoom={4}
      >
        {infoWindow && (
          <InfoWindow
            position={markerPosition}
            onCloseClick={() => setInfoWindow(null)}
          >
            <div>{infoWindow.getContent()}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;