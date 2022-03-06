import { Button, Icon } from "../Common/BasicUIElements";

const UploadSearchBar = ({
  title,
  keyword,
  onChangeInput,
  onClear,
  onClickCancel,
  onKeyPress,
}) => {
  return (
    <>
      <h2 className="sr">{title}</h2>
      <header id="header">
        <div className="search_header_form type_upload">
          <div className="sh_form_wrap">
            <Icon name="icon_search" />
            <input
              type="text"
              className="sh_input"
              placeholder="검색어를 입력해주세요"
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              value={keyword}
            />
          </div>
          <Button
            className="btn_cancel"
            content="취소"
            onClick={onClickCancel}
          />
        </div>
      </header>
    </>
  );
};

export default UploadSearchBar;
