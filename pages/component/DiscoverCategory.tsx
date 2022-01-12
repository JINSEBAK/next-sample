import classNames from "classnames";

interface DiscoverCategoryProps {
  scrollTop: number;
}
const DiscoverCategory = ({ scrollTop }: DiscoverCategoryProps) => {
  console.log(scrollTop);
  return (
    <div className={classNames("discover", scrollTop > 64 && "sticky")}>
      <ul className="categories">
        <li className="active">Feed</li>
        <li>기획</li>
        <li>이벤트</li>
        <li>인기</li>
        <li>브랜드</li>
      </ul>
    </div>
  );
};

export default DiscoverCategory;
