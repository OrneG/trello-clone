import React from 'react'
import CloseButton from 'components/CloseButton/CloseButton'
import './Modal.scss'

const Modal = ({children}) => (
    <div className='overlay'>
        <div className='modal'>
            <CloseButton />
            {children}
        </div>
    </div>
)

export default Modal;