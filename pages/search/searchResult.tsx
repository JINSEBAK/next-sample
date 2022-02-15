import {
  MainContainer,
  Contents,
} from "../../component/Common/CommonUIElements";
import SubHeader from "../../component/Common/SubHeader";
import Link from "next/link";
import { Icon } from "../../component/Common/BasicUIElements";
import { useState, useEffect, useRef } from "react";

const DATAS = [
  { id: 1, imgUrl: "/images/test2.jpeg" },
  { id: 2, imgUrl: "/images/test3.jpeg" },
  { id: 3, imgUrl: "/images/test4.jpeg" },
  { id: 4, imgUrl: "/images/test6.jpeg" },
  { id: 5, imgUrl: "/images/test7.jpeg" },
  { id: 6, imgUrl: "/images/test2.jpeg" },
  { id: 7, imgUrl: "/images/test4.jpeg" },
  { id: 8, imgUrl: "/images/test5.jpeg" },
];
const SearchResult = () => {
  //
  const [lists, setLists] = useState([]);
  useEffect(() => {
    setLists(DATAS);
  }, []);

  return (
    <MainContainer>
      <SubHeader title="#수제간식" isBack={true} />
      <Contents className="ssg_sub2">
        <ul className="gallery_list">
          {lists.map((item, index) => {
            return (
              <li className="list_item" key={index}>
                <Link href={`/search/searchResultFeeds/${item.id}`}>
                  <a id={item.id}>
                    <img
                      src={item.imgUrl}
                      alt="이미지"
                      style={{ height: "100%" }}
                    />
                    <Icon name="icon_video" />
                    <Icon name="icon_place" />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Contents>
    </MainContainer>
  );
};

export default SearchResult;
