import { useState, useEffect } from "react";

interface useDblClickProps {
  onClickHandle: () => void;
  onDoubleClickHome: () => void;
  delay?: number;
}
export function useDoubleClick(onClickHandle, onDoubleClickHome, delay = 200) {
  const [click, setClick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (click === 1) {
        console.log("single click");
        onClickHandle();
        setClick(0);
      }
    }, delay);

    if (click === 2) {
      onDoubleClickHome();
      console.log("double click");
    }
    return () => clearTimeout(timer);
  }, [click]);

  return () => setClick((prev) => prev + 1);
}
