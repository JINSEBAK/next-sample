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
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
  createRef,
} from "react";
import { useDebounce } from "../../../hooks";
import ResultFeed from "../../../component/search/ResultFeed";

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
  const [marker, setMarker] = useState({ lat: 0, lng: 0 });
  const [page, setPage] = useState(1);
  const [position, setPosition] = useState({ lat: 37.57182, lng: 126.983321 });
  const scrollRef = useRef(null); // 스크롤 박스

  const itemRefs = useRef([]);

  useEffect(() => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places();
    if (keyword.length > 0) {
      ps.keywordSearch(keyword, (data, status, pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setSearchResult(data);
          setMarker({ lat: data[0].y, lng: data[0].x });
          setPage(pagination.current);
          scrollRef.current.scrollTop = 0;
        }
      });
    } else {
      ps.categorySearch(
        "CE7,CS2,SW8",
        (data, status, pagination) => {
          if (status === window.kakao.maps.services.Status.OK) {
            setSearchResult(data);
          }
        },
        {
          location: map.getCenter(),
          sort: window.kakao.maps.services.SortBy.DISTANCE, // 거리순으로 정렬
          radius: 3000,
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
  // const onScrollList = useCallback((e) => {
  //   console.log(e);
  // }, []);
  const stopScroll = useCallback((e) => {}, []);

  const debounceScroll = useDebounce(stopScroll, 1500);

  const scrollDetectHandler = useCallback((...e) => {
    // 스크롤 위, 아래 감지
    //throttleScroll(...e);
    // 스크롤 멈춤 감지 (디바운스가 마지막 그룹의 이벤트를 노티해줌)
    debounceScroll(...e);
  }, []);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", scrollDetectHandler);
      return () => {
        if (!scrollRef.current) return;
        scrollRef.current.removeEventListener("scroll", scrollDetectHandler);
      };
    }
  });

  // 목록에서 장소 선택
  const onClickItem = (place) => {
    const moveLatLon = new window.kakao.maps.LatLng(place.y, place.x);
    map.panTo(moveLatLon);

    setMarker({ lat: place.y, lng: place.x });
  };

  // map안에서 ref생성
  const addToRefs = (el) => {
    itemRefs.current.push(el);
    console.log(itemRefs);
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
              center={
                keyword.length > 0
                  ? { lat: marker.lat, lng: marker.lng }
                  : { lat: position.lat, lng: position.lng }
              }
              style={{ width: "100%", height: "320px" }}
              level={8}
              onCreate={setMap}
              onCenterChanged={(map) =>
                setState({
                  level: map.getLevel(),
                  lat: map.getCenter().getLat(),
                  lng: map.getCenter().getLng(),
                })
              }
            >
              <MapMarker position={{ lat: marker.lat, lng: marker.lng }} />
            </Map>
            {searchResult.length > 0 && (
              <div className="s_place_result" style={{ position: "relative" }}>
                <ul ref={scrollRef}>
                  {searchResult.map((place, index) => {
                    return (
                      <li key={index}>
                        <SearchPlaceItem
                          name={place.place_name}
                          address={place.address_name}
                          placeInfo={place}
                          onClickItem={onClickItem}
                          ref={addToRefs}
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
