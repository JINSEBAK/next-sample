import { useState, useEffect } from "react";
import { MainContainer, Contents } from "../component/Common/CommonUIElements";
import Header from "../component/Header";
import Navigation from "../component/Common/Navigation";
import LogContainer from "../component/UserLog";
import RecommendFriends from "../component/RecommendFriends";

const Home = () => {
  const [expand, setExpand] = useState(false);
  const [list, setList] = useState([]);
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
        <LogContainer />
      </Contents>
      <Navigation />
    </MainContainer>
  );
};

export default Home;
