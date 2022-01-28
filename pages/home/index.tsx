import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  MainContainer,
  Contents,
} from "../../component/Common/CommonUIElements";
import HomeHeader from "../../component/Common/HomeHeader";
import Navigation from "../../component/Common/Navigation";
import LogContainer from "../../component/UserLog";
import RecommendFriends from "../../component/RecommendFriends";
import SlideModal from "../../component/Common/SlideModal";

const SAMPLE_LOGS: any = [
  {
    media: [
      { type: "image", imgUrl: "/images/test2.jpeg" },
      { type: "image", imgUrl: "/images/test3.jpeg" },
      { type: "image", imgUrl: "/images/test4.jpeg" },
    ],
    userInfo: {
      name: "아코야건강하자",
      profileUrl: "/images/test6.png",
      family: [
        { id: 1, imgUrl: "test2.jpeg", name: "냥1" },
        { id: 2, imgUrl: "test3.jpeg", name: "냥2" },
        { id: 3, imgUrl: "test4.jpeg", name: "냥3" },
        { id: 4, imgUrl: "test5.jpeg", name: "냥4" },
        { id: 5, imgUrl: "test2.jpeg", name: "냥5" },
        { id: 6, imgUrl: "test3.jpeg", name: "냥6" },
        { id: 7, imgUrl: "test4.jpeg", name: "냥7" },
        { id: 8, imgUrl: "test5.jpeg", name: "냥8" },
      ],
    },
    logInfo: {
      place: "대륭포스트타워 6차",
      lat: 37.481554,
      lng: 126.88379,
    },
  },
  {
    media: [
      { type: "image", imgUrl: "/images/test2.jpeg" },
      { type: "image", imgUrl: "/images/test3.jpeg" },
      { type: "image", imgUrl: "/images/test4.jpeg" },
    ],
    userInfo: {
      name: "개장수",
      profileUrl: "/images/test3.jpeg",
      family: [
        { id: 1, imgUrl: "test2.jpeg", name: "냥1" },
        { id: 2, imgUrl: "test3.jpeg", name: "냥2" },
        { id: 3, imgUrl: "test4.jpeg", name: "냥3" },
        { id: 4, imgUrl: "test5.jpeg", name: "냥4" },
        { id: 5, imgUrl: "test2.jpeg", name: "냥5" },
        { id: 6, imgUrl: "test3.jpeg", name: "냥6" },
        { id: 7, imgUrl: "test4.jpeg", name: "냥7" },
        { id: 8, imgUrl: "test5.jpeg", name: "냥8" },
      ],
    },
    logInfo: {
      place: "방화동구석탱이",
    },
  },
];

const Home = () => {
  const [expand, setExpand] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [open, setOpen] = useState(false);

  // 페이지 라우터 정보
  const router = useRouter();

  // Document scroll 이벤트
  useEffect(() => {
    const container = document.querySelector(".main");
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, false);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // 랜더링 1초 뒤에 팝업 띄우기
    setTimeout(() => {
      //setOpen(true);
    }, 1000);
  }, []);

  const onClickPets = () => {
    setExpand(!expand);
  };

  const onClickModal = () => {
    setOpen(false);
  };

  return (
    <MainContainer>
      <HomeHeader />
      <Contents className="ssg_home">
        <RecommendFriends />
        {SAMPLE_LOGS.map(
          (
            item: { userInfo: any; media: any; logInfo: any },
            index: number
          ) => {
            return (
              <LogContainer
                key={index}
                userInfo={item.userInfo}
                media={item.media}
                logInfo={item.logInfo}
                alignType={index % 2 === 0 ? "left" : "right"}
              />
            );
          }
        )}
      </Contents>
      <Navigation page={router.pathname} />
      <SlideModal open={open} onCloseModal={onClickModal}>
        <h3>뱃지 획득 축하축하</h3>
      </SlideModal>
    </MainContainer>
  );
};

export default Home;
