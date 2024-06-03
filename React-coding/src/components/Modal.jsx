import React, { useState } from "react";
import ModalView from "./ModalView";

const Modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div onClick={() => setShow(false)}>
      <h1>Modal</h1>
      <button
        type="button"
        onClick={(e) => {
          //event bubbling happening here
          e.stopPropagation();
          setShow(!show);
        }}
      >
        Show the modal
      </button>
      {show ? <ModalView handleClose={handleClose} /> : ""}
    </div>
  );
};

export default Modal;
