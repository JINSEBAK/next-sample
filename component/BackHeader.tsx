import styled, { css } from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const StyledBackHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 8px;
  background-color: transparent;
`;

const StyledBackHeaderInner = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackHeader = () => {
  const onClickBack = () => {
    history.back();
  };

  return (
    <StyledBackHeader className="header-search">
      <StyledBackHeaderInner>
        <Button icon onClick={onClickBack}>
          <Icon name="back" />
        </Button>
      </StyledBackHeaderInner>
    </StyledBackHeader>
  );
};

export default BackHeader;
