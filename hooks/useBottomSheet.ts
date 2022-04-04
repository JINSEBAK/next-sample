import { useRef, useEffect } from "react";
import { MIN_Y, MAX_Y } from "../lib/types/constants";

interface BottomSheetMaetrics {
  touchStart: {
    sheetY: number;
    touchY: number;
  };
  touchMove: {
    prevTouchY?: number;
    movingDirection: "none" | "down" | "up";
  };
}

const useBottomSheet = () => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const metrics = useRef<BottomSheetMaetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: "none",
    },
  });

  useEffect(() => {
    // Touch event handler
    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      // 터치하는 시점의 바텀시트와 터치포인트의 Y값을 기록
      touchStart.sheetY = sheetRef.current.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();

      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }
      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = "down";
      }
      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = "up";
      }

      const touchOffset = currentTouch.clientY - touchStart.touchY;
      let nextSheetY = touchStart.sheetY + touchOffset;

      if (nextSheetY <= MIN_Y) {
        nextSheetY = MIN_Y;
      }
      if (nextSheetY >= MAX_Y) {
        nextSheetY = MAX_Y;
      }

      sheetRef.current.style.setProperty(
        "transform",
        `translateY(${nextSheetY - MAX_Y}px)`
      );
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const { touchMove } = metrics.current;

      const currentSheetY = sheetRef.current.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === "down") {
          sheetRef.current.style.setProperty("transform", "translateY(0)");
        }
        if (touchMove.movingDirection === "up") {
          sheetRef.current.style.setProperty(
            "transform",
            `translateY(${MIN_Y - MAX_Y}px)`
          );
        }
      }
    };

    sheetRef.current.addEventListener("touchstart", handleTouchStart);
    sheetRef.current.addEventListener("touchmove", handleTouchMove);
    sheetRef.current.addEventListener("touchend", handleTouchEnd);

    return () => {
      sheetRef.current.removeEventListener("touchstart", handleTouchStart);
      sheetRef.current.removeEventListener("touchmove", handleTouchMove);
      sheetRef.current.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return { sheetRef };
};

export default useBottomSheet;
