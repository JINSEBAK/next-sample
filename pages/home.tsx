import styled, { css } from "styled-components";
import { useState } from "react";
import classNames from "classnames";
import LogContainer from "./component/UserLog";

const Home = () => {
  const [expand, setExpand] = useState(false);
  const [list, setList] = useState([1]);

  const onClickPets = () => {
    setExpand(!expand);
  };
  return (
    <div className="main">
      {list.map((item, index) => (
        <LogContainer key={index} />
      ))}
    </div>
  );
};

export default Home;
