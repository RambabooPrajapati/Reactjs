// Modal.js
import React from 'react';
import './Modal.css'; // We'll create this CSS file

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the modal if it is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
