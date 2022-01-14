import { useState, useEffect, Fragment } from "react";
import {
  MainContainer,
  Contents,
} from "../../component/Common/CommonUIElements";
import Header from "../../component/Header";
import Navigation from "../../component/Common/Navigation";
import LogContainer from "../../component/UserLog";
import RecommendFriends from "../../component/RecommendFriends";

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
      place: "까뮤양평타운플레이그라운드",
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

  const onClickPets = () => {
    setExpand(!expand);
  };

  return (
    <MainContainer>
      <Header scrollTop={scrollTop} />
      <Contents>
        <RecommendFriends />
        {SAMPLE_LOGS.map((item, index) => {
          return (
            <LogContainer
              key={index}
              userInfo={item.userInfo}
              media={item.media}
              logInfo={item.logInfo}
              alignType={index % 2 === 0 ? "left" : "right"}
            />
          );
        })}
      </Contents>
      <Navigation />
    </MainContainer>
  );
};

export default Home;
