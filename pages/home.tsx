import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import classNames from "classnames";
import LogContainer from "./component/UserLog";
import Header from "./component/Header";
import RecommendFriends from "./component/RecommendFriends";

const Home = () => {
  const [expand, setExpand] = useState(false);
  const [list, setList] = useState([1, 2, 3]);
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
    <div className="main">
      <Header scrollTop={scrollTop} />

      <RecommendFriends />
      {list.map((item, index) => (
        <LogContainer key={index} />
      ))}
    </div>
  );
};

export default Home;
