import { useState } from "react";
import Link from "next/link";
import {
  MainContainer,
  Contents,
  ContentsInner,
} from "../../component/Common/CommonUIElements";
import SubHeader from "../../component/Common/SubHeader";
import { Button } from "../../component/Common/BasicUIElements";
import SlidePopup from "../../component/Common/SlidePopup";
import { ArchiveMenu } from "../../lib/types/common";
import Archive from "../../component/Archive";

const USER_ARCHIVE_LIST = [
  { id: "ARC001", title: "폴더1", imgUrl: "test4.jpeg" },
  { id: "ARC002", title: "폴더2", imgUrl: "test5.jpeg" },
];

const ArchivePage = () => {
  const [open, setOpen] = useState(false);
  const [archiveList, setArchiveList] = useState(USER_ARCHIVE_LIST);

  const onClickOption = () => {
    setOpen(!open);
  };

  const onSelectMenu = (item: string) => {
    console.log(item);
  };

  return (
    <MainContainer>
      <SubHeader title="내 스크랩" isBack={false} />
      <Contents className="ssb_sub has_mg_lr">
        <ContentsInner type="div" className="scrap_frame">
          <ul className="scrap_folder_list">
            {/* 생성 버튼 */}
            <li>
              <Archive className="no_dim base_folder" />
            </li>
            <li>
              <Archive className="no_dim" />
            </li>
            {archiveList.map((item, index) => {
              return (
                <li key={index}>
                  <Archive info={item} />
                </li>
              );
            })}
          </ul>
        </ContentsInner>
        <SlidePopup
          open={open}
          overlayClickClose={true}
          onClose={onClickOption}
          menu={ArchiveMenu}
          onSelect={onSelectMenu}
        />
      </Contents>
    </MainContainer>
  );
};

export default ArchivePage;
