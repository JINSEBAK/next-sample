import { Button } from "./BasicUIElements";
import classNames from "classnames";

interface SlidePopupProps {
  open: boolean | false;
  overlayClickClose: boolean | true;
  menu: {};
  onClose?: () => void;
  onSelect?: (item: string) => void;
}

// down -> up slide popup
const SlidePopup = ({
  open,
  overlayClickClose,
  onClose,
  menu,
  onSelect,
}: SlidePopupProps) => {
  return (
    <aside
      id="aside"
      className={classNames(open && "on", overlayClickClose && "pop_bg_close")}
      onClick={overlayClickClose && onClose}
    >
      <div
        className={classNames(
          "pop_btslider_wrap",
          "pop_close_area",
          open ? "show" : "out" // slide-up 처리
        )}
      >
        <ul className="pop_listbtn_noraml">
          {Object.keys(menu).map((item, index) => {
            return (
              <li key={index}>
                <Button onClick={() => onSelect(item)}>
                  <span>{menu[item]}</span>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SlidePopup;
