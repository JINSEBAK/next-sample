import styled from "styled-components";
import Link from "next/link";
import Button from "./Button";
import Icon from "./Icon";
import { Input } from "./Forms";

const StyledSearchHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 8px;
  background-color: #fff;
`;

const StyledSearchHeaderInner = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchHeader = ({ onChangeInput, keyword }) => {
  // 뒤로가기
  const onClickBack = () => {
    history.back();
  };

  // 위치 검색 이동하기
  const onClickMap = () => {
    console.log("위치 검색");
  };

  return (
    <StyledSearchHeader className="header-search">
      <StyledSearchHeaderInner className="inner">
        <Button icon onClick={onClickBack}>
          <Icon name="back" />
        </Button>
        <Input
          type="text"
          placeholder="검색어를 입력해주세요."
          onChange={onChangeInput}
        />
        <Link href="/map">
          <a>
            <Icon name="marker" />
          </a>
        </Link>
      </StyledSearchHeaderInner>
    </StyledSearchHeader>
  );
};

export default SearchHeader;
