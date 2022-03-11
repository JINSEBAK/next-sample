import classNames from "classnames";
import { Button } from "./BasicUIElements";

interface BottomSheetProps {
  open: boolean;
  draggable?: boolean;
  className?: string;
  overlayClickClose?: boolean;
  children?: JSX.Element | JSX.Element[];
  menu?: React.ReactChild;
}

const BottomSheet = ({
  open = false,
  draggable = false,
  className,
  overlayClickClose = true,
  children,
  menu,
}: BottomSheetProps) => {
  return (
    <aside id="aside" className={classNames(open && "on")}>
      <div
        className={classNames(
          "pop_btslider_wrap",
          "pop_close_area",
          open && "show",
          className && className
        )}
      >
        {draggable && <Button className="pop_slideclose_btn" />}
        {children && children}
        {menu && menu}
      </div>
    </aside>
  );
};

export default BottomSheet;
