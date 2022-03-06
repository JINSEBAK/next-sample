import { SearchTabTitle, SearchTabClassName } from "../../lib/types/common";
import Link from "next/link";
import classNames from "classnames";
import {
  User,
  Family,
  Place,
  HashTag,
  Product,
  Brand,
} from "./SearchResultElements";

interface SearchResultProps {
  type: string;
  list: [{ code: string; imgUrl: string; name: string }];
  keyword?: string;
}

const SearchResult = ({ type, list, keyword }: SearchResultProps) => {
  //
  return (
    <section>
      <h3 className="sch_sec_title">{SearchTabTitle[type]}</h3>
      <ul className={classNames(SearchTabClassName[type])}>
        {list.map((item, index) => {
          return (
            <li className="item" key={index}>
              <Link href="#">
                <a>
                  <span className="img">
                    <img src={item.imgUrl} alt={item.name} />
                  </span>
                  <span className="txt ellipsis">{item.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SearchResult;
