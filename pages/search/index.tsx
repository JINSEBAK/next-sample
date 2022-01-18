import { useState, useEffect } from "react";
import SearchHeader from "../../component/Common/SearchHeader";

import searchResult from "../searchResult.json";
import { SearchResultList } from "../../component/ContainerView";
import { Button, Icon } from "../../component/Common/BasicUIElements";
import {
  MainContainer,
  Contents,
  DivContainer,
} from "../../component/Common/CommonUIElements";
import { RecommendKeyword } from "./SearchElements";

const RECOMMEND_KEYWORD = [
  { code: 1, name: "쉬야응가" },
  { code: 2, name: "크런치홀릭" },
  { code: 3, name: "참치와도미" },
  { code: 4, name: "큰알갱이" },
  { code: 5, name: "수제간식" },
  { code: 6, name: "쉬야응가" },
  { code: 7, name: "크런치홀릭" },
  { code: 8, name: "참치와도미" },
  { code: 9, name: "큰알갱이" },
  { code: 10, name: "수제간식" },
];

const Search = () => {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState(searchResult.lists);
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
      `<span className="highlighter">${keyword}</span>`
    );
    return { __html: `${txt}` };
  };

  return (
    <MainContainer>
      <SearchHeader onChangeInput={onChangeInput} keyword={keyword} />
      <Contents className="ssg_search">
        {/* 추천 검색 */}
        <DivContainer className="search_content_home">
          <RecommendKeyword lists={RECOMMEND_KEYWORD} />
          {/* 최근 검색 or 검색 결과 */}
          <section className="sch_recent">
            <h3 className="sch_sec_title">최근 검색</h3>
            <Button className="btn_txt_delete" content="모두 삭제" />
            <ul className="search_result_list">
              <li className="search_result_item">
                <div className="s_img place"></div>
                <div className="s_info">
                  <span className="info_main ellipsis">
                    서울대입구역 샤로수길 서울대입구역 샤로수길 서울대입구역
                    샤로수길 서울대입구역 샤로수길
                  </span>
                  <span className="info_sub ellipsis">서울특별시</span>
                </div>
                <Button className="btn_x_delete">
                  <span className="sr">삭제</span>
                </Button>
              </li>
              <li className="search_result_item">
                <div className="s_img hashtag"></div>
                <div className="s_info">
                  <span className="info_main">댕댕이</span>
                </div>
                <Button className="btn_x_delete">
                  <span className="sr">삭제</span>
                </Button>
              </li>
              <li className="search_result_item">
                <div className="s_img">
                  <img src="/images/test2.jpeg" alt="" />
                </div>
                <div className="s_info">
                  <span className="info_main">판교슈나우저파파</span>
                  <span className="info_sub">@gilnyang</span>
                </div>
                <Button className="btn_x_delete">
                  <span className="sr">삭제</span>
                </Button>
              </li>
              <li className="search_result_item">
                <div className="s_img">
                  <img src="/images/test3.jpeg" alt="" />
                </div>
                <div className="s_info">
                  <span className="info_main">짜먹는연어</span>
                </div>
                <Button className="btn_x_delete">
                  <span className="sr">삭제</span>
                </Button>
              </li>
            </ul>
          </section>
          <SearchResultList>
            {results.map((item, index) => {
              return (
                <li key={index}>
                  <Icon name={item.type} />
                  <div
                    className="title"
                    dangerouslySetInnerHTML={HighLighter(item.name, keyword)}
                  />
                  <Button>
                    <Icon name="delete" />
                  </Button>
                </li>
              );
            })}
          </SearchResultList>
        </DivContainer>
      </Contents>
    </MainContainer>
  );
};

export default Search;
