import Link from "next/link";
import { Button } from "../../component/Common/BasicUIElements";
import { ContentsInner } from "../../component/Common/CommonUIElements";
import classNames from "classnames";
import SearchResult from "../../component/search/SearchResult";
import { Fragment } from "react";

interface SearchSectionTitle {
  title: string;
}
export const SearchSectionTitle = ({ title }) => {
  return <h3 className="sch_sec_title">{title}</h3>;
};

interface RecommendKeywordProps {
  lists: { code: number; name: string }[];
}
// 추천 검색
export const RecommendKeyword = ({ lists }: RecommendKeywordProps) => {
  //
  return (
    <ContentsInner type="section" className="sch_recommend">
      <SearchSectionTitle title="추천 검색" />
      <ul className="sch_recommend_list xscroll_list">
        {lists &&
          lists.map((item, index) => {
            return (
              <li key={index} className="list_item">
                <a data-code={item.code}>{item.name}</a>
              </li>
            );
          })}
      </ul>
    </ContentsInner>
  );
};

interface SearchProps {
  keyword: string;
  lists: any;
  highLighter?: (target: string, keyword: string) => { __html: string };
  activeTab?: number;
  onClickDelete?: (e) => void;
}
// 검색 결과 (목록)
export const SearchResultList = ({
  keyword,
  lists,
  activeTab,
  highLighter,
  onClickDelete,
}: SearchProps) => {
  // 프로필 영역 랜더링
  const renderSearchImg = (item: { type: string; profileUrl: string }) => {
    return (
      <div className={classNames("s_img", item.type)}>
        {item.type !== "place" && item.type !== "hashtag" && (
          <img src={item.profileUrl} />
        )}
      </div>
    );
  };

  return (
    <div className="s_tab_contents">
      {keyword.length > 0 ? (
        <>
          {lists &&
            Object.keys(lists).map((item, index) => {
              // 데이터는
              return (
                <Fragment key={index}>
                  {(activeTab === 0 || activeTab === index + 1) && (
                    <SearchResult
                      type={item}
                      list={lists[item]}
                      keyword={keyword}
                    />
                  )}
                </Fragment>
              );
            })}
        </>
      ) : (
        <>
          <ul className="search_result_list">
            {lists &&
              lists.map((item, index) => {
                return (
                  <li key={index} className="search_result_item">
                    <Link href="#">
                      <a>
                        {renderSearchImg(item)}
                        <div className="s_info">
                          <span
                            className="info_main ellipsis"
                            dangerouslySetInnerHTML={highLighter(
                              item.title,
                              keyword
                            )}
                          />
                          {(item.type === "place" || item.type === "user") && (
                            <span className="info_sub">
                              {item.type === "user" && "@"}
                              {item.sub}
                            </span>
                          )}
                        </div>
                        {!(keyword.length > 0) && (
                          <Button
                            className="btn_x_delete"
                            onClick={(e) => onClickDelete(e)}
                          >
                            <span className="sr">삭제</span>
                          </Button>
                        )}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};
