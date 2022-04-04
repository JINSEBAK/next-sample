import React, { useEffect } from "react";
import { useSelectionContainer } from "react-drag-to-select";

const MouseSelection = ({ onSelectionChange }) => {
  const { DragSelection } = useSelectionContainer({
    eventsElement:
      typeof window === "object" && document.getElementById("root"),
    onSelectionChange,
    onSelectionStart: () => {
      console.log("start");
    },
    onSelectionEnd: () => console.log("end"),
    selectionProps: {
      style: {
        border: "1px dashed red",
      },
    },
  });

  return <DragSelection />;
};

export default React.memo(MouseSelection);
