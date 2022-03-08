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
import { useState, useEffect, useRef } from "react";

const KAKAO_PLACE_CATEGORY = {
  MT1: "대형마트",
  CS2: "편의점",
  PS3: "어린이집, 유치원",
  SC4: "학교",
  AC5: "학원",
  PK6: "주차장",
  OL7: "주유소, 충전소",
  SW8: "지하철역",
  BK9: "은행",
  CT1: "문화시설",
  AG2: "중개업소",
  PO3: "공공기관",
  AT4: "관광명소",
  AD5: "숙박",
  FD6: "음식점",
  CE7: "카페",
  HP8: "병원",
  PM9: "약국",
};

const SamplePage = () => {
  const [state, setState] = useState();
  const [tmpKey, setTmpKey] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const [page, setPage] = useState(1);
  const [position, setPosition] = useState({ lat: 37.57182, lng: 126.983321 });
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places();

    // 장소검색 API로 제공하는 장소는 최대 45개
    if (keyword.length > 0) {
      ps.keywordSearch(
        keyword,
        (data, status, pagination) => {
          console.log(pagination);
          if (status === window.kakao.maps.services.Status.OK) {
            setSearchResult(data);

            let markers = [];
            data.map((place, index) => {
              markers.push({ position: { lat: place.y, lng: place.x } });
            });
            setMarkers(markers);
          } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            setSearchResult([]);
            setMarkers([]);
          }
        },
        {
          location: map.getCenter(),
          sort: window.kakao.maps.services.SortBy.DISTANCE, // 거리순으로 정렬
          radius: 15000,
        }
      );
    } else {
      // 기본적으로 다중 카테고리 검색은 지원하지 않음
      // 다중 카테고리 검색 검색 api를 카테고리만큼 호출한 후 데이터 처리
      ps.categorySearch(
        "CE7",
        (data, status, pagination) => {
          if (status === window.kakao.maps.services.Status.OK) {
            console.log(data);
            setSearchResult(data);

            let markers = [];
            data.map((place, index) => {
              markers.push({ position: { lat: place.y, lng: place.x } });
            });
            setMarkers(markers);
          }
        },
        {
          location: map.getCenter(),
          sort: window.kakao.maps.services.SortBy.DISTANCE, // 거리순으로 정렬
          radius: 15000,
        }
      );
    }
  }, [map, keyword]);

  useEffect(() => {
    console.log(page);
  }, [page]);

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

  // 장소 검색 결과 스크롤
  const onScrollList = (e) => {
    // 60: 버튼 한개 높이만큼
    if (
      scrollRef.current.scrollHeight - 60 <=
      scrollRef.current.scrollTop + scrollRef.current.clientHeight
    ) {
      // 스크롤 마지막이니 더 불러와요
      console.log("데이터 더 불러와요");
      setPage(page + 1);
    }
  };

  return (
    <>
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
              center={{ lat: position.lat, lng: position.lng }}
              style={{ width: "100%", height: "320px" }}
              onCreate={setMap}
              onCenterChanged={(map) =>
                setState({
                  level: map.getLevel(),
                  lat: map.getCenter().getLat(),
                  lng: map.getCenter().getLng(),
                })
              }
              // 레벨은 1~14, 숫자가 작을 수록 확대 수준이 높다
              level={3}
            >
              {markers.map((marker, index) => {
                return <MapMarker key={index} position={marker.position} />;
              })}
            </Map>
            {searchResult.length > 0 && (
              <div className="s_place_result" style={{ position: "relative" }}>
                <ul onScroll={onScrollList} ref={scrollRef}>
                  {searchResult.map((place, index) => {
                    return (
                      <li key={index}>
                        <SearchPlaceItem
                          name={place.place_name}
                          address={place.address_name}
                          placeInfo={place}
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
    </>
  );
};

export default SamplePage;
