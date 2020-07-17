import React from 'react'
import CloseButton from 'components/CloseButton/CloseButton';
import './Popover.scss'

const Popover = ({title, children}) => (
    <div className='popover'>
        <CloseButton />
        <div className='popover-header'>
            <div className='popover-header-title'>
                {title}
            </div>
        </div>
        <div className='popover-body'>
            {children}
        </div>
    </div>
)

export default Popover;