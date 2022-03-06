import { Map, MapMarker } from "react-kakao-maps-sdk";

interface MapContainerProps {
  center: { lat: number; lng: number };
}
const MapContainer = ({ center }: MapContainerProps) => {
  return <Map center={{ lat: center.lat, lng: center.lng }} />;
};

export default Map;
