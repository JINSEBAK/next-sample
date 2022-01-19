import { useState, useEffect } from "react";
import SearchHeader from "../../component/Common/SearchHeader";
import {
  MainContainer,
  Contents,
  ContentsInner,
  Tabs,
} from "../../component/Common/CommonUIElements";
import { RecommendKeyword, SearchResultList } from "./SearchElements";
import { SearchTabTitle } from "../../lib/types/common";
import NoSearchResult from "../../component/Common/NoSearchResult";

// 샘플데이터s
import searchResult from "../searchResult.json";
import classNames from "classnames";

const Search = () => {
  const [recommendLists, setRecommendLists] = useState(
    searchResult.RecommendResults
  );
  const [searchResults, setSearchResults] = useState(
    searchResult.SearchResults
  );
  const [keyword, setKeyword] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  // 검색어가 변경될때마다 실행 - 실시간 검색
  useEffect(() => {
    setSearchResults(searchResult.SearchResults);
    //setSearchResults([]);
  }, [keyword]);

  // 검색어 입력
  const onChangeInput = (e) => {
    setKeyword(e.target.value);
  };

  // 검색어 클리어
  const onClearKeyword = () => {
    setKeyword("");
  };

  // 하이라이트처리
  const highLighter = (target: string, keyword: string) => {
    let txt = target.replace(keyword, `<mark>${keyword}</mark>`);
    return { __html: `${txt}` };
  };

  // 탭 변경
  const onClickTab = (index: number) => {
    setActiveTab(index);
  };

  // 검색 이력 삭제
  const onClickDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const res = confirm("삭제할거야?");
  };

  return (
    <MainContainer>
      <SearchHeader
        onChangeInput={onChangeInput}
        onClearKeyword={onClearKeyword}
        keyword={keyword}
      />
      <Contents className="ssg_search">
        <ContentsInner
          type="div"
          className={classNames(
            keyword.length > 0 ? "search_content_result" : "search_content_home"
          )}
        >
          {keyword.length > 0 ? (
            <>
              {searchResults.length > 0 ? (
                <>
                  <Tabs
                    menu={SearchTabTitle}
                    activeTab={activeTab}
                    onClickTab={onClickTab}
                  />
                  <SearchResultList
                    keyword={keyword}
                    lists={searchResults}
                    highLighter={highLighter}
                  />
                </>
              ) : (
                <NoSearchResult message="검색 결과가 없어요" />
              )}
            </>
          ) : (
            <>
              <RecommendKeyword lists={recommendLists} />
              <ContentsInner type="section" className="sch_recent">
                <SearchResultList
                  keyword={keyword}
                  lists={searchResults}
                  highLighter={highLighter}
                  onClickDelete={onClickDelete}
                />
              </ContentsInner>
            </>
          )}
        </ContentsInner>
      </Contents>
    </MainContainer>
  );
};

export default Search;
