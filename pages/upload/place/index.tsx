import {
  MainContainer,
  Contents,
} from "../../../component/Common/CommonUIElements";
import UploadSearchBar from "../../../component/search/UploadSearchBar";
import { useState, ChangeEvent, useEffect } from "react";
import {
  SearchResultContainer,
  SearchPlaceItem,
} from "../../../component/search/SearchResultElements";
import NoSearchResult from "../../../component/Common/NoSearchResult";

const PlaceSearchPage = () => {
  const [tmpKey, setTmpKey] = useState("");
  const [keyword, setKeyword] = useState("");
  const [position, setPosition] = useState({ lat: null, lng: null });
  const [searchResult, setSearchResult] = useState([]);
  const [placeItem, setPlaceItem] = useState(); // 선택된 장소

  useEffect(() => {
    // 유저의 현재 위치 가져오기
    // 실제: 네이티브 연동 위치정보 획득, 샘플: navagator.geolocation 정보 활용
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  useEffect(() => {
    // lat, lng 변경 시 지도 갱신
    if (position.lat && position.lng) {
      const mapScript = document.createElement("script");
      mapScript.async = true;
      mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=3dae0e1c3bcd367cdf273b9533ba7cce&autoload=false&libraries=services`;
      document.head.appendChild(mapScript);

      const onLoadMap = () => {
        //
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(position.lat, position.lng),
            level: 3,
          };
          // 맵 객체 생성
          const map = new window.kakao.maps.Map(container, options);
          // 좌표-주소 변환 객체
          const geocoder = new window.kakao.maps.services.Geocoder();
          // 장소 검색 객체
          const ps = new window.kakao.maps.services.Places();

          // 장소 좌표로 마커 표시
          const displayMarker = (place) => {
            const imageSrc = "/images/inc/icon_map_pin2.svg";
            const imageSize = new window.kakao.maps.Size(32, 34);
            const markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize
            );

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(place.y, place.x),
              image: markerImage,
            });
          };

          // 장소 검색 callback
          const placeSearchCallBack = (
            data: any,
            status: any,
            pagination: any
          ) => {
            if (status === window.kakao.maps.services.Status.OK) {
              setSearchResult(data);
              data.map((place, index) => {
                if (index === 0) {
                  // 첫번째 장소만 마커 표시
                  displayMarker(place);
                }
              });
            } else if (
              status === window.kakao.maps.services.Status.ZERO_RESULT
            ) {
              // 검색 결과 없음
              setSearchResult([]);
            }
          };

          // 좌표-주소 변환 callback
          const geocoderCallBack = (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              // 변환된 주소를 키워드로 사용해서 장소 조회
              ps.keywordSearch(
                result[0].address.address_name,
                placeSearchCallBack,
                {
                  radius: 1000,
                }
              );
            } else if (
              status === window.kakao.maps.services.Status.ZERO_RESULT
            ) {
              // 결과 없음 화면 노출
            }
          };

          // 좌표-주소 변환 시에는 경도, 위도 순으로 전달
          geocoder.coord2Address(position.lng, position.lat, geocoderCallBack);
        });
      };
      mapScript.addEventListener("load", onLoadMap);

      // 컴포넌트 언마운트 시 이벤트 삭제
      return () => mapScript.removeEventListener("load", onLoadMap);
    }
  }, [position]);

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      // 검색 실행
      setKeyword(tmpKey);
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTmpKey(e.target.value);
  };

  const onClickCancel = () => {
    console.log("네이티브 연동해서 액티비티 종료");
  };

  return (
    <MainContainer>
      <UploadSearchBar
        title="장소 검색"
        keyword={keyword}
        onChangeInput={onChangeInput}
        onClear={() => setTmpKey("")}
        onKeyPress={onKeyPress}
        onClickCancel={onClickCancel}
      />
      <Contents className="ssg_search">
        <SearchResultContainer>
          {position.lat && position.lng && (
            <div className="map_area" id="map" />
          )}
          {searchResult.length > 0 ? (
            <div className="s_place_result" style={{ position: "relative" }}>
              <ul>
                {searchResult.map((item, index) => {
                  return (
                    <li key={index}>
                      <SearchPlaceItem
                        name={item.place_name}
                        address={item.address_name}
                        onClick={() => setPlaceItem(item)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <NoSearchResult message="해당 장소는 카카오 지도에 등록되지 않은 장소예요" />
          )}
        </SearchResultContainer>
      </Contents>
    </MainContainer>
  );
};

export default PlaceSearchPage;
