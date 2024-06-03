import React, { useEffect } from "react";

const ModalView = ({ handleClose }) => {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        handleClose();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });
  return (
    <div id="modalBackdrop" className="modalBackdrop">
      <div className="modalContent" id="modalContent">
        <div className="modalHeader" id="modalHeader">
          <span className="modalTitle">Modal title</span>
          <span className="closeButton" onClick={handleClose}>
            X
          </span>
        </div>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          nulla velit quo cumque odio aut, repellat quod quisquam eius veritatis
          qui voluptates consectetur dolore aliquid facere molestiae dolores sed
          iusto?
        </span>
      </div>
    </div>
  );
};

export default ModalView;
