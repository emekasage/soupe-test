import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import modalStyles from "../styles/Modal.module.css";

export default function Modal({ show, setShowModal, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = () => {
    // console.log("About to close");
    setShowModal(false);
  };

  const modalContent = show ? (
    <div className={modalStyles.overlay}>
      <div className={modalStyles.body}>
        <div>
          <div
            className={`bg-green-600 py-4 px-2.5 rounded-full flex justify-center items-center font-bold text-xl text-white cursor-pointer ${modalStyles.close}`}
            onClick={() => handleClose()}
          >
            X
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
