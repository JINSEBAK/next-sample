import Link from "next/link";
import { Button } from "../../component/Common/BasicUIElements";
import { ContentsInner } from "../../component/Common/CommonUIElements";
import classNames from "classnames";

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
  lists: any[];
  highLighter: any;
  onClickDelete?: (e) => void;
}
// 검색 결과 (목록)
export const SearchResultList = ({
  keyword,
  lists,
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
    <ul className="search_result_list">
      {lists &&
        lists.map((item, index) => {
          return (
            <li key={index} className="search_result_item">
              <Link href="#">
                <a>
                  {renderSearchImg(item)}
                  <div className="s_info">
                    {/* 검색 키워드와 일치하는 부분 하이라이트 처리 */}
                    <span
                      className="info_main ellipsis"
                      dangerouslySetInnerHTML={highLighter(item.title, keyword)}
                    />
                    {(item.type === "place" || item.type === "user") && (
                      <span className="info_sub">
                        {item.type === "user" && "@"}
                        {item.sub}
                      </span>
                    )}
                  </div>
                  {/* 최근 검색 결과인 경우에만 삭제 버튼 노출 */}
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
  );
};
