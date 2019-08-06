import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import './ModalComents.scss';

const ModalComents = () => (
    <div className='modal-coments'>
        <h2 className='h2'>
            <FontAwesomeIcon className='icon' icon={faComment}></FontAwesomeIcon>Add Comment
        </h2>
        <textarea className='textarea' placeholder='Write a comment...'></textarea>
    </div>
)

export default ModalComents;