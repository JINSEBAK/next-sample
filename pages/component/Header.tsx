import styled from "styled-components";
import Notification from "./Notification";

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${(prop) => prop.bgColor || "#fff"};
  color: #222;
  padding: 0 16px;
  height: 164px;
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
}

const Header = ({ bgColor }: HeaderProps) => {
  return (
    <StyledHeader bgColor={bgColor} className="header">
      <a>BI</a>
      <Notification />
    </StyledHeader>
  );
};

export default Header;
