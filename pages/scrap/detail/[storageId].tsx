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
import SelectableComponent from "../../../component/Scrap/SelectableItem";
import Selecto from "react-selecto";

const SAMPLE_DATAS = [
  { id: 1, type: "", imgUrl: "test_7.jpeg" },
  { id: 2, type: "", imgUrl: "test_4.jpeg" },
  { id: 3, type: "", imgUrl: "test_2.jpeg" },
  { id: 4, type: "", imgUrl: "test_5.jpeg" },
  { id: 5, type: "", imgUrl: "" },
];

interface selectedListType {
  id: string;
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
  let selectedFeed = [];

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

  const onSelectionFinish = (items) => {
    console.log("select finish");

    items.map((item, index) => {
      console.log(item.props.id);
    });
  };

  const onDuringSelection = (items) => {
    //console.log(items);
    items.map((item, index) => {
      console.log(item.prop);
    });
  };

  const onSelect = (e) => {
    console.log(e);
    e.added.forEach((el) => {
      el.classList.add("selected");
      console.log(el.id);
      selectedFeed.push(el.id);
    });
    setSelectedList(selectedFeed);

    e.removed.forEach((el) => {
      el.classList.remove("selected");
    });
  };

  const isChecked = (id: string) => {
    const flt = selectedList.map((item) => {
      console.log(item);
      return item.id === id;
    });
    console.log(flt);
    return flt.length > 0 ? true : false;
  };

  return (
    <MainContainer>
      <SubHeader
        title={`기본 폴더(${SAMPLE_DATAS.length})`}
        rightButton={
          <Button
            className="btn_hdmore btn_hdright"
            content="HD MORE"
            onClick={() => setOpen(true)}
          />
        }
      />
      <Contents className="scrap">
        {/* <Selecto
          dragContainer={".scrap_img_list"}
          selectByClick={true}
          continueSelect={true}
          selectableTargets={[".selectable-item"]}
          selectFromInside={true}
          hitRate={30} // selected되는 면적비율
          ratio={0}
          onSelect={(e) => onSelect(e)}
        />

        <ul className="scrap_img_list">
          {SAMPLE_DATAS.map((item, index) => (
            <li key={index} className="selectable-item" id={String(item.id)}>
              <Button>
                <input
                  type="checkbox"
                  className="scrap_chk_inp"
                  defaultChecked={isChecked(String(item.id))}
                />
                <label className="scrap_chk_label">
                  <em />
                </label>
                <img src="/images/test7.jpeg" alt="이미지" />
              </Button>
            </li>
          ))}
        </ul> */}

        <SelectableGroup
          className="main"
          clickClassName="tick"
          enableDeselect={true}
          onSelectionFinish={onSelectionFinish}
          //duringSelection={onDuringSelection}
          disabled={!selectMode}
        >
          <ul className="scrap_img_list">
            {SAMPLE_DATAS.map((item, index) => (
              <SelectableComponent
                key={index}
                id={`sel${item.id}`}
                selectMode={selectMode}
                selectedList={selectedList}
              />
            ))}
          </ul>
        </SelectableGroup>

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
