import styled from "styled-components";
import Notification from "./Notification";

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${(prop) => prop.bgColor || "#fff"};
  color: #222;
  padding: 0 16px;
  height: 64px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;
`;

function Header({ bgColor }) {
  return (
    <StyledHeader bgColor={bgColor} className="header">
      <a>BI</a>
      <Notification />
    </StyledHeader>
  );
}

export default Header;
