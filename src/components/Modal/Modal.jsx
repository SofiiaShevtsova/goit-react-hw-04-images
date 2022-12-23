import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import StyleList from 'styles/styles';
const { ModalBackdrop, ModalBox } = StyleList;

const modalRoot = document.querySelector('#modal-root');

const Modal = props => {
  const { closeModal } = props;
  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return createPortal(
    <ModalBackdrop onClick={props.closeModal}>
      <ModalBox>
        <img src={props.image} alt="#" />
      </ModalBox>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Modal;
