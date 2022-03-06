import {
  MainContainer,
  Contents,
} from "../../../component/Common/CommonUIElements";
import HomeHeader from "../../../component/Common/HomeHeader";
import { LogContainer } from "../../../component/UserLog/LogElements";
import { useState, useEffect, Fragment, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import ResultFeed from "../../../component/search/ResultFeed";

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

const SearchResultFeeds = (datas) => {
  //
  const router = useRouter();
  const query = router.query;
  const feedRef = useRef<HTMLDivElement>(null);

  // state

  return (
    <MainContainer>
      <HomeHeader />
      <Contents className="ssg_home">
        <div>
          {DATAS.map((item, index) => {
            return (
              <ResultFeed
                key={index}
                id={item.id}
                imgUrl={item.imgUrl}
                isCenter={item.id === Number(query.id) ? true : false}
              />
            );
          })}
        </div>
      </Contents>
    </MainContainer>
  );
};

export default SearchResultFeeds;
