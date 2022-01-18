import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
import ModalTick from "../ModalTick";

interface ModalProps {
  open: boolean;
  children: JSX.Element | JSX.Element[];
  onCloseModal: () => void;
}

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,.3)",
    zIndex: 5001, // header가 5000
  },
  content: {
    top: "auto",
    left: "0",
    right: "0",
    width: "100%",
    height: "300px",
    borderRadius: "16px 16px 0 0",
    border: "none",
  },
};

const SlideModal = ({ open, onCloseModal, children }: ModalProps) => {
  return (
    <Modal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={onCloseModal}
      // default: 0, 닫기 시 애니메이션 적용하려면 closeTimeoutMS props 필요
      closeTimeoutMS={400}
      style={modalStyle}
      // overlay click해서 모달 닫기 default: true
      shouldCloseOnOverlayClick={true}
      // ESC 키로 모달닫기 default: true
      shouldCloseOnEsc={true}
    >
      <ModalTick onClick={onCloseModal} />
      <div
        style={{
          border: "1px solid #ddd",
          padding: "24px",
          textAlign: "center",
          margin: "24px 0",
        }}
      >
        {children}
      </div>
    </Modal>
  );
};

export default SlideModal;
