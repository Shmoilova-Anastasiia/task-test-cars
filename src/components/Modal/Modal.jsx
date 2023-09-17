import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {IoMdClose} from "react-icons/io"
import css from './Modal.module.css'

const modalContainer = document.getElementById('modal');

const Modal = ({ onClose, children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  const handleClose = ({ target, currentTarget, code }, onCloseCallback) => {
    if (target === currentTarget || code === 'Escape') {
      onCloseCallback();
    }
  };

  const handleModalClose = useCallback(
    e => {
      document.body.style.overflow = 'visible';
      handleClose(e, onClose);
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleModalClose);

    return () => document.body.removeEventListener('keydown', handleModalClose);
  }, [handleModalClose]);

  return createPortal(
    <div 
    className={css.backdrop }
    onClick={handleModalClose}>
      <div 
      className={css.modal}
      >
        <button
          onClick={onClose}
          className={css.buttonClose}
          type="button"
           
        >
            <IoMdClose className={css.iconClose}/>
        </button>
        {children}
      </div>
    </div>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
};

export default Modal;