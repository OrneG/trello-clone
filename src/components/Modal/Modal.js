import React, { Component } from 'react';
import ModalButtonContainer from 'components/ModalButtonContainer/ModalButtonContainer';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import './Modal.scss';

class Modal extends Component {
  render() {
    const { onClose, onClick, onAddDescription, description, comments } = this.props
    return (
      <div className='modal'>
        <ModalContainer comments={comments} onClick={onClick}
        onAddDescription={onAddDescription} description={description}></ModalContainer>
        <ModalButtonContainer onClose={onClose}></ModalButtonContainer>
      </div>
    )
  }
}

export default Modal;