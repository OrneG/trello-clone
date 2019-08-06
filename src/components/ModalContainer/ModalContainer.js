import React from 'react';
import ModalDescription from 'components/ModalDescription/ModalDescription';
import ModalComents from 'components/ModalComents/ModalComents';
import './ModalContainer.scss';

const ModalContainer = () => (
  <div className='modal-container'>
      <ModalDescription></ModalDescription>
      <ModalComents></ModalComents>
  </div>
)

export default ModalContainer;