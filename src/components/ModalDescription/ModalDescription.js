import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import './ModalDescription.scss';

const ModalDescription = () => (
    <div className='modal-description'>
        <h2 className='h2'>
            <FontAwesomeIcon className='icon' icon={faAlignLeft}></FontAwesomeIcon>Description
        </h2>
        <textarea className='textarea' placeholder='Add a more detailed description...'></textarea>
    </div>
)

export default ModalDescription;