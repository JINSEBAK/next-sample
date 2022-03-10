import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useState } from "react";

const BottomSheetPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet open={open}>My Awesome Content Here</BottomSheet>
    </>
  );
};

export default BottomSheetPage;
