import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavInput.scss';

const NavInput = () => (
    <>
        <input type='text' className='nav-input'>
        </input>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
    </>
)

export default NavInput;