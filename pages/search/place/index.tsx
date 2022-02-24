import {
  MainContainer,
  Contents,
} from "../../../component/Common/CommonUIElements";
import { Button } from "../../../component/Common/BasicUIElements";
import SlidePopup from "../../../component/Common/SlidePopup";
import { useEffect, useState } from "react";

const place = {
  lat: 37.4783066104075,
  lng: 126.887377235326,
};
const PlaceMapPage = () => {
  //
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=3dae0e1c3bcd367cdf273b9533ba7cce&autoload=false&libraries=services,clusterer,drawing`;
    document.head.appendChild(mapScript);

    const onLoadMap = () => {
      //
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(place.lat, place.lng),
          level: 5,
        };
        const map = new window.kakao.maps.Map(container, options);
        // const markerPosition = new window.kakao.maps.LatLng(
        //   place.lat,
        //   place.lng
        // );
        // let marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });
        // marker.setMap(map);

        // 장소 검색
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch("마리오아울렛", placeSearchCallBack);

        function placeSearchCallBack(data: any, status: any, pagination: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            console.log(data);
            setPlaceList(data);
          }
        }

        //마커 클러스터리 생성
        const clusterer = new window.kakao.maps.MarkerClusterer({
          map: map,
          averageCenter: true,
          minLevel: 10,
        });
        console.log(clusterer);
        let marker = placeList.map((feed, index) => {
          return new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(
              Number(feed.lat),
              Number(feed.lng)
            ),
          });
        });
        // 클러스터에 마커 추가
        clusterer.addMarkers(marker);
      });
    };
    mapScript.addEventListener("load", onLoadMap);

    // useEffect의 클린업
    return () => mapScript.removeEventListener("load", onLoadMap);
  }, [place.lat, place.lng]);

  return (
    <MainContainer>
      <header id="header" className="has_only_hdback">
        <Button className="btn_hdback" content="HD BACK" />
      </header>
      <Contents className="ssg_search_place">
        {/* 지도 */}
        <div
          className="map_area"
          style={{ position: "relative", width: "100vw", height: "100vh" }}
        >
          <div
            id="map"
            className="map"
            style={{ width: "100%", height: "100%", backgroundColor: "#eee" }}
          ></div>
          <Button
            className="goto_mylocation"
            style={{ top: "30px", right: "12px" }}
          />
        </div>
      </Contents>
      <aside id="aside" className="has_pop_search_place on">
        <div
          id="pop_slider3"
          className="pop_btslider2_wrap pop_close_area show pop_search_place"
        >
          <button type="button" className="btn_map_refresh">
            지도 정보를 새로 불러오세요
          </button>
          <Button className="pop_slideclose_btn" />
          <div className="pop_contents_wrap pop_search_place">
            <div className="search_result_item pop_sp_info">
              <div className="s_img">
                <img src="/images/test6.jpeg" alt="" />
              </div>
              <div className="s_info">
                <span className="info_main">내 근처 인기 피드</span>
                <span className="info_sub">
                  <span>강남구</span>
                  <span className="middot"></span>
                  <span>피드 1,800+</span>
                </span>
              </div>
            </div>
            <div className="pop_sp_tabs">
              <ul className="line_tabs type_equal">
                <li className="tab_item list_item is_active">
                  <a href="#">인기</a>
                </li>
                <li className="tab_item list_item">
                  <a href="#">친구들</a>
                </li>
                <li className="tab_item list_item">
                  <a href="#">사진 속 인기상품</a>
                </li>
              </ul>
            </div>
            <div className="pop_sp_tab_contents">
              <ul>
                <li className="pop_sp_item">
                  <div className="search_result_item">
                    <div className="s_img">
                      <img src="/images/test4.jpeg" alt="" />
                    </div>
                    <div className="s_info">
                      <span className="info_main">논현펫카페</span>
                      <span className="info_sub">
                        <span>강남구</span>
                        <span className="middot"></span>
                        <span>피드 1,800+</span>
                      </span>
                      <a href="#" className="btn_more">
                        정보 더 보기
                      </a>
                    </div>
                  </div>
                  <ul className="gallery_list xscroll_list">
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test7.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test8.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test9.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_video">
                          <span className="sr">비디오</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test7.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test8.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      {/* 더보기가 있는 경우 : has_btn_more 클래스 추가, .gallery_more 추가 */}
                      <a href="#" className="has_btn_more">
                        <div className="gallery_more">
                          <em>500+</em>
                          <span>더보기</span>
                        </div>
                        <img
                          src="/images/test9.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_video">
                          <span className="sr">비디오</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pop_sp_item">
                  <div className="search_result_item">
                    <div className="s_img">
                      <img src="/images/test3.jpeg" alt="" />
                    </div>
                    <div className="s_info">
                      <span className="info_main">논현펫카페</span>
                      <span className="info_sub">
                        <span>강남구</span>
                        <span className="middot"></span>
                        <span>피드 1,800+</span>
                      </span>
                      <a href="#" className="btn_more">
                        정보 더 보기
                      </a>
                    </div>
                  </div>
                  <ul className="gallery_list xscroll_list">
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test7.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test8.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test9.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_video">
                          <span className="sr">비디오</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test7.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test8.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pop_sp_item">
                  <div className="search_result_item">
                    <div className="s_img">
                      <img src="/images/test2.jpeg" alt="" />
                    </div>
                    <div className="s_info">
                      <span className="info_main">논현펫카페</span>
                      <span className="info_sub">
                        <span>강남구</span>
                        <span className="middot"></span>
                        <span>피드 1,800+</span>
                      </span>
                      <a href="#" className="btn_more">
                        정보 더 보기
                      </a>
                    </div>
                  </div>
                  <ul className="gallery_list xscroll_list">
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test7.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test8.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test9.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_video">
                          <span className="sr">비디오</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#">
                        <img
                          src="/images/test7.jpeg"
                          className="thumb"
                          alt=""
                        />
                        <span className="icon icon_slide">
                          <span className="sr">여러 이미지</span>
                        </span>
                        <span className="icon icon_place">
                          <span className="sr">장소</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </MainContainer>
  );
};

export default PlaceMapPage;
