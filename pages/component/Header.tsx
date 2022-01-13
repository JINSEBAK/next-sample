import styled from "styled-components";
import Notification from "./Notification";
import DiscoverCategory from "./DiscoverCategory";
import { Button } from "./Common/CommonUIElements";

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${(prop) => prop.bgColor || "#fff"};
  color: #222;
  padding: 0 16px;
  height: 64px;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  background-color: #f2f3f6;
  z-index: 100;
`;

interface HeaderProps {
  bgColor?: string;
  scrollTop?: number;
  children?: React.ReactNode;
}

const Header = ({ bgColor, scrollTop }: HeaderProps) => {
  return (
    <>
      {/* <StyledHeader bgColor={bgColor} className="header">
        <a>BI</a>
        <Notification />
      </StyledHeader>
      <DiscoverCategory scrollTop={scrollTop} /> */}

      <header id="header">
        <h1>
          <a href="#">MOLLY'S</a>
        </h1>
        <div className="hd_btn_wrap">
          <Button className="btn_hdsearch" content="HD SEARCH" />
          <Button className="btn_hdcart" content="HD CART">
            <em>17</em>
          </Button>
          <Button className="btn_hdmap" content="HD MAP" />
        </div>
      </header>
    </>
  );
};

export default Header;
