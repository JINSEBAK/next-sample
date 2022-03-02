import { useState, useEffect } from "react";
import {
  MainContainer,
  Contents,
} from "../../component/Common/CommonUIElements";
import SubHeader from "../../component/Common/SubHeader";
import SlidePopup from "../../component/Common/SlidePopup";
import { ScrapMenu } from "../../lib/types/common";
import GalleryBox from "../../component/Scrap/GalleryBox";
import Navigation from "../../component/Common/Navigation";
import { useRouter } from "next/router";

const DATAS = [
  { storageId: "s001", storageNm: "기본폴더", defaultYn: "Y" },
  {
    storageId: "s002",
    storageNm: "폴더1",
    defaultYn: "N",
    imgUrl: "/images/test2.jpeg",
  },
  {
    storageId: "s003",
    storageNm: "폴더2",
    defaultYn: "N",
    imgUrl: "/images/test4.jpeg",
  },
];

const ScrapPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    setFolderList(DATAS);
  }, []);

  const onClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  const onSelectMenu = (item: string) => {
    console.log(item);
    if (item === "SM001") {
      //router.push("/scrap/detail");
      router.push({
        pathname: "/scrap/detail",
        query: {
          storageId: item,
        },
      });
    } else {
      alert("삭제할꺼니?");
    }
  };

  return (
    <MainContainer>
      <SubHeader title="내 스크랩" isBack={false} />
      <Contents className="ssb_sub has_mg_lr">
        <ul className="scrap_folder_list">
          {folderList.map((item, index) => {
            return (
              <li key={index}>
                <GalleryBox
                  storageId={item.storageId}
                  storageNm={item.storageNm}
                  defaultYn={item.defaultYn}
                  imgUrl={item.imgUrl}
                  onClickOption={onClickOption}
                />
              </li>
            );
          })}
        </ul>
        {folderList.length > 1 && (
          <div className="scrap_msgguide_box">
            <img src="/images/inc/icon_question.svg" alt="질문 아이콘" />
            폴더 이름 수정, 폴더 삭제는 더보기를 눌러주세요.
          </div>
        )}
      </Contents>
      <Navigation />
      <SlidePopup
        open={open}
        overlayClickClose={true}
        onClose={() => setOpen(false)}
        menu={ScrapMenu}
        onSelect={onSelectMenu}
      />
    </MainContainer>
  );
};

export default ScrapPage;
