import React, { Component } from 'react';
import ModalButtonContainer from 'components/ModalButtonContainer/ModalButtonContainer';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import './Modal.scss';

class Modal extends Component {
  render() {
    const { onClose, onChange, value } = this.props
    return (
      <div className='modal'>
        <ModalContainer onChange={onChange} value={value}></ModalContainer>
        <ModalButtonContainer onClose={onClose}></ModalButtonContainer>
      </div>
    )
  }
}

export default Modal;