import Modal from "react-modal";

interface ModalProps {
  open: boolean;
  onCloseModal: () => void;
}

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalView = ({ open, onCloseModal }) => {
  return (
    <Modal isOpen={open} ariaHideApp={false}>
      <h2>Modal Sample</h2>
      <button onClick={onCloseModal}>닫기</button>
    </Modal>
  );
};

export default ModalView;
