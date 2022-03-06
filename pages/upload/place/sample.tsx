import Script from "next/script";
import {
  MainContainer,
  Contents,
} from "../../../component/Common/CommonUIElements";
import UploadSearchBar from "../../../component/search/UploadSearchBar";
import {
  SearchResultContainer,
  SearchPlaceItem,
} from "../../../component/search/SearchResultElements";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";

const SamplePage = () => {
  const [tmpKey, setTmpKey] = useState("");
  const [keyword, setKeyword] = useState("몰리스");
  const [searchResult, setSearchResult] = useState([]);
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    console.log(map);
    if (!map) return;
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, pagination) => {
      console.log(status);
      if (status === window.kakao.maps.services.Status.OK) {
        setSearchResult(data);
        console.log(data[0]);

        setMarkers(data[0]);
      }
    });
  }, [map, keyword]);

  const onChangeInput = (e) => {
    setTmpKey(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setKeyword(tmpKey);
    }
  };

  const onClickCancel = () => {
    console.log("취소클릭");
  };

  return (
    <MainContainer>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=3dae0e1c3bcd367cdf273b9533ba7cce&autoload=false&libraries=services`}
        strategy="beforeInteractive"
      />
      <UploadSearchBar
        title="장소 검색"
        keyword={tmpKey}
        onChangeInput={onChangeInput}
        onClear={() => setTmpKey("")}
        onKeyPress={onKeyPress}
        onClickCancel={onClickCancel}
      />
      <Contents className="ssg_search">
        <SearchResultContainer>
          <Map
            center={{ lat: 37.566826, lng: 126.9786567 }}
            style={{ width: "100%", height: "320px" }}
            onCreate={setMap}
          >
            <MapMarker position={{ lat: 37.566826, lng: 126.9786567 }} />
          </Map>
          {searchResult.length > 0 && (
            <div className="s_place_result" style={{ position: "relative" }}>
              <ul>
                {searchResult.map((place, index) => {
                  return (
                    <li key={index}>
                      <SearchPlaceItem
                        name={place.place_name}
                        address={place.address_name}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </SearchResultContainer>
      </Contents>
    </MainContainer>
  );
};

export default SamplePage;
