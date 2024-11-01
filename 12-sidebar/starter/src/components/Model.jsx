import { FaTimes } from "react-icons/fa";
import useGlobalContext from "../useGlobalContext";
const Model = () => {
  const { setModal, modal } = useGlobalContext();
  return (
    <div className={` ${modal ? "show-modal modal-overlay" : "modal-overlay"}`}>
      <div className="modal-container">
        <h4>model</h4>
        <button
          className="close-modal-btn"
          onClick={() => setModal((modal) => !modal)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Model;
