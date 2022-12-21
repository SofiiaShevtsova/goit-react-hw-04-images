import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import StyleList from 'styles/styles';
const { ModalBackdrop, ModalBox } = StyleList;

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.closeModal);
  }

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.props.closeModal}>
        <ModalBox>
          <img src={this.props.image} alt="#" />
        </ModalBox>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Modal;
