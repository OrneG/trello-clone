import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import Button, {BUTTON_TYPES} from 'components/Button/Button';
import { ModalContextConsumer } from 'components/Contexts/ModalContext';
import './ModalDescription.scss';

class ModalDescription extends Component {
    render() {
        return (
            <ModalContextConsumer>
                {
                    ({addCardDescription, description}) => (
                        <div className='modal-description'>
                        <h2 className='h2'>
                            <FontAwesomeIcon className='icon'
                            icon={faAlignLeft}></FontAwesomeIcon>Description
                    </h2>
                        <textarea className='textarea'
                            placeholder='Add a more detailed description...'
                            description={description}>
                        </textarea>
                        <div onClick={addCardDescription}>
                            <Button classType={BUTTON_TYPES.GREEN} text='Guardar'></Button>
                        </div>
                    </div>
                    )
                }
            </ModalContextConsumer>
        )
    }
}

export default ModalDescription;