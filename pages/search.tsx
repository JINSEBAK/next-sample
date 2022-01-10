import Button from "./component/Button";
import ModalView from "./component/Modal";
import { useState } from "react";

function Search() {
  const [open, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    console.log("close");
    setOpen(false);
  };

  return (
    <div className="main main-b">
      <h4>SEACRH</h4>
      <div>
        <input type="text" />
        <Button onClick={onClickHandler}>검색</Button>
      </div>

      <ModalView open={open} onCloseModal={onCloseModal} />
    </div>
  );
}

export default Search;
