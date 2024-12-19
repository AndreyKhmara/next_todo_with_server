interface ITaskModal {
  open: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

export const TaskModal: React.FC<ITaskModal> = ({
  open,
  setModalOpen,
  children,
}) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${open ? "modal-open" : "modal"}`}
    >
      <div className="modal-box">
        <form>
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};
