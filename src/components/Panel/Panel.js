import React from 'react'
import './Panel.scss'
import CloseButton from 'components/CloseButton/CloseButton'
import TagSelection from 'components/TagSelection/TagSelection';

const Panel = () => (
    <div className='panel'>
        <CloseButton />
        <p className='title'>Etiquetas</p>
        <TagSelection />
    </div>
)

export default Panel