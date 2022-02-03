import React from "react";

import classes from "./Modal.module.css";

interface ModalProps {
  show?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, show }) => {
  return (
    <>
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
