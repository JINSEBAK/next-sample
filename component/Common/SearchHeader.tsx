import Link from "next/link";
import { Button, Icon } from "./BasicUIElements";
import { Input } from "./FormUIElements";

const SearchHeader = ({ onChangeInput, onClearKeyword, keyword }) => {
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
      <Button
        className="btn_hdback btn_hdleft"
        content="HD BACK"
        onClick={onClickBack}
      />
      <div className="search_header_form">
        <form>
          <div className="sh_form_wrap">
            <Icon name="icon_search" />
            {/* 기본 placeholder는 관리자가 설정한 추천어 -> 키워드 없이 검색 시 해당 추천어로 검색 */}
            <Input
              type="text"
              className="sh_input"
              placeholder="검색어를 입력해주세요."
              onChange={(e) => onChangeInput(e)}
              value={keyword}
            />
            {/* 키워드 입력 시에만 노출 */}
            {keyword.length > 0 && (
              <Button className="btn_kwd_delete" onClick={onClearKeyword}>
                <span className="sr">삭제</span>
              </Button>
            )}
          </div>
        </form>
      </div>
      <Button className="btn_hdmap btn_hdright" content="HD Map" />
    </header>
  );
};

export default SearchHeader;
