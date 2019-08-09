import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import './ModalDescription.scss';

class ModalDescription extends Component {
    render() {
        const { onChange, value } = this.props
        return (
            <div className='modal-description'>
                <h2 className='h2'>
                    <FontAwesomeIcon className='icon' icon={faAlignLeft}></FontAwesomeIcon>Description
            </h2>
                <textarea className='textarea'
                    placeholder='Add a more detailed description...'
                    onChange={onChange}
                    value={value}>
                </textarea>
            </div>
        )
    }
}

export default ModalDescription;