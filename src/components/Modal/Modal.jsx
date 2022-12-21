import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import StyleList from 'styles/styles';
const { ModalBackdrop, ModalBox } = StyleList;

const modalRoot = document.querySelector('#modal-root');

const Modal = props => {

  useEffect (() => {
    document.addEventListener('keydown', props.closeModal);

    return () => {
    document.removeEventListener('keydown', props.closeModal);
    };
  }, []);

    return createPortal(
      <ModalBackdrop onClick={props.closeModal}>
        <ModalBox>
          <img src={props.image} alt="#" />
        </ModalBox>
      </ModalBackdrop>,
      modalRoot
    );
  }

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Modal;
