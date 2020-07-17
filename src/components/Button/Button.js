import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.scss'

export const BUTTON_TYPES = {
    PRIMARY: 'primary',
    DEFAULT: 'default',
    LIGHT: 'light'
}

export const BUTTON_SIZES = {
    SHRINK: 'shrink',
    EXPAND: 'expand',
    ICON: 'icon'
}

const Button = ({text, icon, type, size, className}) => (
    <div className={`button ${className || ''} ${type || BUTTON_TYPES.DEFAULT} ${size || BUTTON_SIZES.SHRINK}`}>
        {
            icon && 
            <FontAwesomeIcon icon={icon} className='button-icon' />
        }
        {text}
    </div>
)

export default Button