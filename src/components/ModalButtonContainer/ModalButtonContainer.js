import React, { Component } from 'react';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';
import modalButtons from 'modalButtons';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import './ModalButtonContainer.scss';

class ModalButtonContainer extends Component {
    state = {
        visible: true
    }
    closeModal = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        return (
            <div className='modal-button-container'>
                <div onClick={this.closeModal}>
                    <Button classType={BUTTON_TYPES.SQUARE} text='X'></Button>
                </div>
                <ButtonContainer modalButtons={modalButtons}></ButtonContainer>
            </div>
        )
    }

}

export default ModalButtonContainer;