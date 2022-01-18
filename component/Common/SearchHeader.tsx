import Link from "next/link";
import { Button, Icon } from "./BasicUIElements";
import { Input } from "./FormUIElements";

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
    <header id="header">
      <Button className="btn_hdback btn_hdleft" content="HD BACK" />
      <div className="search_header_form">
        <form>
          <div className="sh_form_wrap">
            <Icon name="icon_search" />
            <Input
              type="text"
              className="sh_input"
              placeholder="검색어를 입력해주세요."
              onChange={(e) => onChangeInput(e)}
              value={keyword}
            />
            <Button className="btn_kwd_delete">
              <span className="sr">삭제</span>
            </Button>
          </div>
        </form>
      </div>
      <Button className="btn_hdmap btn_hdright" content="HD Map" />
    </header>
  );
};

export default SearchHeader;
