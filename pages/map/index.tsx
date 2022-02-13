import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  MainContainer,
  Contents,
  ContentsInner,
} from "../../component/Common/CommonUIElements";
import SubHeader from "../../component/Common/SubHeader";
import { Button, Icon } from "../../component/Common/BasicUIElements";
import Link from "next/link";

declare global {
  interface Window {
    kakao: any;
  }
}

const SearchMap = () => {
  //
  const router = useRouter();
  const [place, setPlace] = useState({ name: "", lat: "", lng: "" });

  // Router에서 파라미터 가져오기
  useEffect(() => {
    setPlace({
      name: router.query.name,
      lat: router.query.lat,
      lng: router.query.lng,
    });
  }, []);

  // 지도 생성
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    //mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API}`;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=3dae0e1c3bcd367cdf273b9533ba7cce&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadMap = () => {
      //
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(place.lat, place.lng),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          place.lat,
          place.lng
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadMap);

    // useEffect의 클린업
    return () => mapScript.removeEventListener("load", onLoadMap);
  }, [place.lat, place.lng]);

  return (
    <MainContainer>
      <SubHeader title={place.name} isBack={true} />
      <Contents className="home_schmap">
        {/* 지도 */}
        <ContentsInner type="section" className="hsch_mapbox">
          <div className="kakao-map" id="map" style={{ height: "200px" }} />
          {/* 마커 */}
          <div className="map_point_style1">
            <p>까뮤양평플레이그라운드</p>
          </div>
        </ContentsInner>
        {/* 갤러리박스 */}
        <ContentsInner type="section" className="sec_hmapgellery_box">
          <div className="sec_hmapcount_box">
            <span>
              <img src="/images/test4.jpeg" alt="" />
            </span>
            <em>307 아이들이 다녀갔어요!</em>
            <Button content="장소정보 더보기" />
          </div>
          <ul className="sec_hmaptab_ul">
            <li>
              <Button className="on" content="최근(519)"></Button>
            </li>
            <li>
              <Button content="인기(19)" />
            </li>
          </ul>
          <ul className="sec_hmapgallery_box">
            <li>
              <Link href="#">
                <a>
                  <img src="/images/test2.jpeg" className="thumb" alt="" />
                  <Icon name="icon_slide" title="여러 이미지" />
                  <Icon name="icon_place" title="장소" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <img src="/images/test3.jpeg" className="thumb" alt="" />
                  <Icon name="icon_video" title="비디오" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <img src="/images/test4.jpeg" className="thumb" alt="" />
                  <Icon name="icon_video" title="비디오" />
                  <Icon name="icon_place" title="장소" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <img src="/images/test5.jpeg" className="thumb" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <img src="/images/test6.jpeg" className="thumb" alt="" />
                  <Icon name="icon_video" title="비디오" />
                  <Icon name="icon_place" title="장소" />
                </a>
              </Link>
            </li>
          </ul>
        </ContentsInner>
      </Contents>
    </MainContainer>
  );
};

export default SearchMap;
