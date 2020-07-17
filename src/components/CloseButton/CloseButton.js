import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './CloseButton.scss'

const CloseButton = () => (
    <FontAwesomeIcon icon={faTimes} className='close-button' />
)

export default CloseButton;
