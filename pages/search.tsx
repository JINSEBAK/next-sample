import Button from "../component/Button";
import ModalView from "../component/Modal";
import { useState, useEffect } from "react";
import SearchHeader from "../component/SearchHeader";

import searchResult from "./searchResult.json";
import { SearchResultList } from "../component/ContainerView";
import Icon from "../component/Icon";

function Search() {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState("");

  // 검색어가 변경될때마다 실행 - 실시간 검색
  useEffect(() => {
    (keyword && keyword.length) > 0
      ? setResults(searchResult.lists)
      : setResults([]);
  }, [keyword]);

  const onClickHandler = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  // 검색어 입력
  const onChangeInput = (e) => {
    setKeyword(e.target.value);
  };

  // 하이라이트처리
  const HighLighter = (target: string, keyword: string) => {
    let txt = target.replace(
      keyword,
      `<span class="highlighter">${keyword}</span>`
    );
    return { __html: `${txt}` };
  };

  return (
    <div className="main main-b">
      <SearchHeader onChangeInput={onChangeInput} keyword={keyword} />
      <SearchResultList>
        {results.map((item, index) => {
          return (
            <li key={index}>
              <Icon name={item.type} />
              <div
                className="title"
                dangerouslySetInnerHTML={HighLighter(item.name, keyword)}
              />
              <Button icon small>
                <Icon name="delete" />
              </Button>
            </li>
          );
        })}
      </SearchResultList>

      <h4>SEACRH</h4>
      <div>
        <input type="text" />
        <Button onClick={onClickHandler}>검색</Button>
      </div>

      <ModalView open={open} onCloseModal={onCloseModal} />
    </div>
  );
}

export default Search;
