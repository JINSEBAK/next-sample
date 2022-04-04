import React, { useState, useCallback, useRef, useEffect } from "react";
import { boxesIntersect } from "react-drag-to-select";
import MouseSelection from "./MouseSelection";

const ScrapDetailSample2 = () => {
  const [selectionBox, setSelectionBox] = useState();
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const selectableItems = useRef([]);

  const handleSelectionChange = useCallback(
    (box) => {
      console.log(box);
      setSelectionBox(box);
      const indexesToSelect = [];
      selectableItems.current.forEach((item, index) => {
        if (boxesIntersect(box, item)) {
          indexesToSelect.push(index);
        }
      });

      setSelectedIndexes(indexesToSelect);
    },
    [selectableItems]
  );

  return (
    <div style={{ border: "1px solid blue", width: "100vw", height: "100vh" }}>
      <MouseSelection onSelectionChange={handleSelectionChange} />
      <div
        id="element-container"
        className="element-container"
        style={{ border: "1px solid yellow" }}
      >
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className={`element ${
              selectedIndexes.includes(i) ? "selected" : ""
            }`}
            style={{
              width: "30vw",
              height: "30vw",
              border: "1px solid #ddd",
              borderRadius: "4px",
              margin: "1px",
              display: "inline-block",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrapDetailSample2;
