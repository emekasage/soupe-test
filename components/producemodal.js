import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import modalStyles from "../styles/Modal.module.css";

export default function ProduceModal({ show, setShowModal, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = () => {
    // console.log("About to close");
    setShowModal(false);
  };

  const modalContent = show ? (
    <div className={modalStyles.produce_overlay}>
      <div className={modalStyles.produce_body}>
        <div>
          <div
            className={`float-right cursor-pointer ${modalStyles.produce_close}`}
            onClick={() => handleClose()}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5008 13.2935L15.6793 18.5955C16.1988 19.1315 16.5368 19.137 17.0658 18.5955L18.1048 17.5315C18.6138 17.0105 18.6483 16.6685 18.1048 16.112L12.6223 10.4995L18.1053 4.88702C18.6188 4.35952 18.6288 4.00352 18.1053 3.46702L17.0663 2.40352C16.5273 1.85152 16.1943 1.87702 15.6798 2.40352L10.5008 7.70552L5.32232 2.40402C4.80782 1.87752 4.47482 1.85202 3.93582 2.40402L2.89682 3.46752C2.37282 4.00402 2.38232 4.36002 2.89682 4.88752L8.37932 10.4995L2.89682 16.112C2.35332 16.6685 2.38232 17.0105 2.89682 17.5315L3.93532 18.5955C4.45982 19.137 4.79782 19.1315 5.32182 18.5955L10.5008 13.2935Z"
                fill="black"
              />
            </svg>
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
