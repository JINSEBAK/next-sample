import styled, { css } from "styled-components";
import { useState, useLayoutEffect } from "react";
import classNames from "classnames";
import LogContainer from "./component/UserLog";
import Header from "./component/Header";

const Home = () => {
  const [expand, setExpand] = useState(false);
  const [list, setList] = useState([1, 2, 3]);
  const [scrollTop, setScrollTop] = useState(0);

  useLayoutEffect(() => {
    const container = document.querySelector("main");
    console.log(container);

    const handleScroll = ({ target }) => {
      setScrollTop(target.scrollTop);
    };

    container.addEventListener("scroll", handleScroll, false);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickPets = () => {
    setExpand(!expand);
  };
  return (
    <div className="main">
      <Header />
      {list.map((item, index) => (
        <LogContainer key={index} />
      ))}
    </div>
  );
};

export default Home;
