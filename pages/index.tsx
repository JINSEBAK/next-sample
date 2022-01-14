import { useState } from "react";
import Image from "next/image";
// Dynamic import는 지원하지 않음
import imageUrl from "/assets/images/cat.jpeg";
import ModalView from "../component/Modal";

export default function Home() {
  //
  const [open, setOpen] = useState(false);
  const onClickHandle = () => {
    setOpen(open);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="main">
        {/* <Image src={imageUrl} alt="Floating Cat" /> */}
        <input type="file" multiple />
      </div>
      <ModalView open={open} onCloseModal={onCloseModal} />
    </>
  );
}
