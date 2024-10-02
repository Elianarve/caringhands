import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`modal-overlay ${className}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;