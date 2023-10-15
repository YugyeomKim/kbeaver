// ModalStyled.js
import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  background: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalBox>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </ModalBox>
    </ModalOverlay>
  );
};

export default Modal;
