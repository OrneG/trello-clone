import React from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import './AddColumn.scss';

const AddColumn = () => (
    <div className='add-column'>
        <input className='input' type='text' placeholder='Enter list title...'></input>
        <Button classType={BUTTON_TYPES.GREEN} text='Add card'></Button>
    </div>
)

export default AddColumn;