import React, { Component } from 'react';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';
import modalButtons from 'modalButtons';
import CloseButton from 'components/CloseButton/CloseButton';
import './ModalButtonContainer.scss';

class ModalButtonContainer extends Component {
    render() {
        const { onClose } = this.props
        return (
            <div className='modal-button-container'>
                <div onClick={onClose}>
                    <CloseButton></CloseButton>
                </div>
                <ButtonContainer modalButtons={modalButtons}></ButtonContainer>
            </div>
        )
    }
}

export default ModalButtonContainer;