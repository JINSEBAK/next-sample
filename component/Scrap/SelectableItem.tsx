import { createSelectable, TSelectableItemProps } from "react-selectable-fast";
import { Button } from "../Common/BasicUIElements";
import { ChangeEvent } from "react";

interface SelectItemProps {
  id: string;
  selectMode: boolean;
  selectedList?: { id: string }[];
}

const SelectableItem = ({
  id,
  selectMode,
  selectedList,
  isSelected,
  isSelecting,
  selectableRef,
}: TSelectableItemProps & SelectItemProps) => {
  //
  //console.log(`${id}, ~ing: ${isSelecting}, ~ed: ${isSelected}`);
  console.log(isSelected);

  return (
    <li ref={selectableRef} className="tick" id={`s-${id}`}>
      <Button content="일시품절">
        {selectMode && (
          <>
            <input
              type="checkbox"
              className="scrap_chk_inp"
              id={id}
              defaultChecked={isSelecting ? isSelecting : isSelected}
            />
            <label className="scrap_chk_label">
              <em />
            </label>
          </>
        )}
        <img src={`/images/test7.jpeg`} alt="이미지" />
      </Button>
    </li>
  );
};

export default createSelectable(SelectableItem);
