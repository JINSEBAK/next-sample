import { createSelectable } from "react-selectable-fast";
import { Button } from "../Common/BasicUIElements";

const SelectableThumb = ({
  selectMode,
  onChangeCheckbox,
  id,
  selectableRef,
  isSelected,
  isSelecting,
}) => {
  return (
    <li>
      <Button content="일시품절" ref={selectableRef}>
        {selectMode && (
          <>
            <input
              type="checkbox"
              className="scrap_chk_inp"
              checked={isSelected}
              onChange={(e) => onChangeCheckbox(e)}
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

export default createSelectable(SelectableThumb);
