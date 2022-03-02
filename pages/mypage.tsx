import { SelectableGroup, createSelectable } from "react-selectable-fast";
import PhotoThumb from "../component/PhotoThumb";
import { useState } from "react";

const SAMPLE_DATAS = [
  { id: 1, type: "", imgUrl: "test_7.jpeg" },
  { id: 2, type: "", imgUrl: "test_4.jpeg" },
  { id: 3, type: "", imgUrl: "test_2.jpeg" },
  { id: 4, type: "", imgUrl: "test_5.jpeg" },
  { id: 5, type: "", imgUrl: "" },
];

const Mypage = () => {
  const [show, setShow] = useState(true);

  const duringSelection = () => {
    console.log("selecting...");
  };

  const onSelectionClear = () => {
    console.log("clear");
  };

  const onSelectedItemUnmount = () => {
    console.log("item unmount");
  };

  return (
    <div className="main">
      <SelectableGroup
        className="main"
        clickClassName="tick"
        enableDeselect={true}
        tolerance={0}
        deselectOnEsc={true}
        allowClickWithoutSelected={false}
        duringSelection={duringSelection}
        onSelectionClear={onSelectionClear}
        onSelectedItemUnmount={onSelectedItemUnmount}
        ignoreList={[]}
      >
        {[...Array(20)].map((n, index) => {
          return (
            <>
              {show && (
                <PhotoThumb
                  key={index}
                  id={`select${index}`}
                  selectableRef={""}
                  isSelected={true}
                  isSelecting="true"
                />
              )}
            </>
          );
        })}
      </SelectableGroup>
    </div>
  );
};

export default Mypage;
