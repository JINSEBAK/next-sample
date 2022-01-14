import { MainContainer } from "../../component/Common/CommonUIElements";
import { MapContainer } from "./MapElements";
import BackHeader from "../../component/BackHeader";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const CENTER = {
  lat: 37.54,
  lng: 127.24,
};

const SearchMap = () => {
  const [markerPos, setMarkerPos] = useState({ lat: 0, lag: 0 });

  const renderMarkers = (map, maps) => {
    console.log("123");
    let marker = new map.Marker({
      position: markerPos,
      map,
    });
    return marker;
  };

  return (
    <MainContainer>
      <BackHeader />
      <MapContainer>
        <LoadScript googleMapsApiKey="AIzaSyCOefwiiKexf2mmi9UPJnFkelw-9YZnxCk">
          <GoogleMap center={CENTER} zoom={4} />
        </LoadScript>
      </MapContainer>
    </MainContainer>
  );
};

export default SearchMap;
