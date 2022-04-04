import { createSelectable } from "react-selectable-fast";

export const Card = createSelectable((props) => {
  const { year, player, selectableRef, isSelected, isSelecting } = props;
  console.log(selectableRef);
  console.log(isSelected);
  console.log(isSelecting);
  return (
    <div
      ref={selectableRef}
      style={{
        width: "30vw",
        height: "30vw",
        borderRadius: "4px",
        display: "inline-block",
        margin: "1px",
        border: isSelecting ? "1px dashed blue" : "1px solid blue",
        background: isSelected && "yellow",
      }}
    >
      <span>
        {year},{player}
      </span>
      <div style={{ marginTop: "16px" }}>isSelected: {isSelected}</div>
      <div>isSelecting: {isSelecting}</div>
    </div>
  );
});
