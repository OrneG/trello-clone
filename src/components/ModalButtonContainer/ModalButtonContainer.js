import React from 'react';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';
import modalButtons from 'modalButtons';
import './ModalButtonContainer.scss';

const ModalButtonContainer = () => (
    <div className='modal-button-container'>
        <ButtonContainer modalButtons={modalButtons}></ButtonContainer>
    </div>
)

export default ModalButtonContainer;