import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const position = [51.766013, 19.460961];

  return (
    <MapContainer
      key="uniqueMapKey"
      center={position}
      zoom={15}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker key="uniqueMarkerKey" position={position}>
        <Popup>Aquapark Falka, ul. Wodna 15, Łódź</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
