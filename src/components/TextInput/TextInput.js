import React from 'react'
import './TextInput.scss'

const TextInput = ({label, placeholder}) => (
    <>
        {label && <label className='text-input-label'>{label}</label>}
        <input type='text' placeholder={placeholder} className='text-input' />
    </>
)

export default TextInput