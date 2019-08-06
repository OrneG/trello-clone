import React from 'react';
import ModalButtonContainer from 'components/ModalButtonContainer/ModalButtonContainer';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import './Modal.scss';

const Modal = () => (
  <div className='modal'>
      <ModalContainer></ModalContainer>
      <ModalButtonContainer></ModalButtonContainer>
  </div>
)

export default Modal;