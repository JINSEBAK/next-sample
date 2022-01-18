import { SectionContainer } from "../../component/Common/CommonUIElements";

export const s = () => {
  return <></>;
};

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
  const RecommendKeywordContainer = ({ children }) => {
    return <ul className="sch_recommend_list xscroll_list">{children}</ul>;
  };

  return (
    <SectionContainer className="sch_recommend">
      <SearchSectionTitle title="추천 검색" />
      <RecommendKeywordContainer>
        {lists &&
          lists.map((item, index) => {
            return (
              <li key={index} className="list_item">
                <a href="javascript:void(0);" data-code={item.code}>
                  {item.name}
                </a>
              </li>
            );
          })}
      </RecommendKeywordContainer>
    </SectionContainer>
  );
};

export const SearchResult = () => {
  return (
    <SectionContainer className="sch_recent">
      {/* 키워드 입력 전에는 최근 검색 / 입력 시작 시 검색 결과 로 변경 */}
      <SearchSectionTitle title="최근 검색" />
    </SectionContainer>
  );
};
