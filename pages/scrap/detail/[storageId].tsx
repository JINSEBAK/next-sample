import {
  MainContainer,
  Contents,
} from "../../../component/Common/CommonUIElements";
import SubHeader from "../../../component/Common/SubHeader";
import { Button } from "../../../component/Common/BasicUIElements";
import { useRouter } from "next/router";
import SlidePopup from "../../../component/Common/SlidePopup";
import { useState, useEffect } from "react";
import { ScrapDetailMenu } from "../../../lib/types/common";
import classNames from "classnames";
import { SelectableGroup } from "react-selectable-fast";
import SelectableThumb from "../../../component/Scrap/SelectableThumb";

const SAMPLE_DATAS = [
  { id: 1, type: "", imgUrl: "test_7.jpeg" },
  { id: 2, type: "", imgUrl: "test_4.jpeg" },
  { id: 3, type: "", imgUrl: "test_2.jpeg" },
  { id: 4, type: "", imgUrl: "test_5.jpeg" },
  { id: 5, type: "", imgUrl: "" },
];

interface selectedListType {
  type: string;
}

const ScrapDetail = () => {
  //
  const router = useRouter();
  const query = router.query;
  //
  const [open, setOpen] = useState(false);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedList, setSelectedList] = useState<selectedListType[]>([]);
  const [cnt, setCnt] = useState(0);
  //
  // 선택 모드 변경 시, 초기화
  useEffect(() => {
    setSelectedList([]);
    setCnt(0);
  }, [selectMode]);

  const onSelectOption = (item: string) => {
    if (item === "SDM001") {
      setSelectMode(true);
    }
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value === "on") {
      // TODO! 임시로 카운트 활용
      setCnt(cnt + 1);
    }
  };

  // 선택 후 취소
  const onClickCancel = () => {
    setSelectMode(false);
  };

  return (
    <MainContainer>
      <SubHeader
        title={`기본 폴더(352) / storageId: ${query.storageId}`}
        rightButton={
          <Button
            className="btn_hdmore btn_hdright"
            content="HD MORE"
            onClick={() => setOpen(true)}
          />
        }
      />
      <Contents className="scrap">
        <ul className="scrap_img_list">
          <SelectableGroup
            className="selectable scrap_img_list"
            clickClassName="tick"
            enableDeselect
          >
            {SAMPLE_DATAS.map((item, index) => {
              return (
                <SelectableThumb
                  selectMode={selectMode}
                  onChangeCheckbox={onChangeCheckbox}
                  key={index}
                  id={`select${index}`}
                  selectableRef={""}
                  isSelected={true}
                  isSelecting="true"
                />
              );
            })}
          </SelectableGroup>
        </ul>
        <div className={classNames("scrap_movebtn_wrap", cnt > 0 && "show")}>
          <Button
            className="scrap_movebtn_white scrap_movebtn_close"
            content="취소"
            onClick={onClickCancel}
          />
          <Button className="scrap_movebtn_mint" content="저장" />
        </div>
      </Contents>

      <SlidePopup
        open={open}
        overlayClickClose={true}
        menu={ScrapDetailMenu}
        onClose={() => setOpen(false)}
        onSelect={onSelectOption}
      />
    </MainContainer>
  );
};

export default ScrapDetail;
