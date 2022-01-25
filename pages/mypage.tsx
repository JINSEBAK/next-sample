import { SelectableGroup, createSelectable } from "react-selectable-fast";
import PhotoThumb from "../component/PhotoThumb";

const Mypage = () => {
  return (
    <div className="main">
      <SelectableGroup
        className="selectable"
        clickClassName="tick"
        enableDeselect
      >
        {[...Array(20)].map((n, index) => {
          return (
            <PhotoThumb
              key={index}
              id={`select${index}`}
              selectableRef={""}
              isSelected={true}
              isSelecting="true"
            />
          );
        })}
      </SelectableGroup>
    </div>
  );
};

export default Mypage;
