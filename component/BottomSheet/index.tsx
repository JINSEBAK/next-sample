import { Button } from "../Common/BasicUIElements";
import useBottomSheet from "../../hooks/useBottomSheet";

const BottomSheet = ({ draggable }) => {
  const { sheetRef } = useBottomSheet();

  return (
    <aside
      id="aside"
      className="has_pop_search_place on is_open"
      ref={sheetRef}
    >
      <div className="pop_btslider2_wrap pop_close_area show pop_search_place">
        {draggable && <Button className="pop_slideclose_btn" />}
        <div className="pop_contents_wrap">111</div>
      </div>
    </aside>
  );
};

export default BottomSheet;
