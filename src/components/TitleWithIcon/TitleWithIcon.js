import React from 'react'
import './TitleWithIcon.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TITLE_SIZE = {
    BIG: 'big',
    MEDIUM: 'medium'
}

const TitleWithIcon = ({title, icon, size}) => (
    <div className='title-with-icon'>
        <FontAwesomeIcon icon={icon}  className='icon' />
        <p className={`title ${size}`}>{title}</p>
    </div>
)

export default TitleWithIcon