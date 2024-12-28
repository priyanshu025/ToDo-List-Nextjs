interface ModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => boolean | void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ openModal, setOpenModal, children }) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${openModal ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
