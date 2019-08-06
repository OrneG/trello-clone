import React from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import './AddCard.scss';

const AddCard = () => (
    <div className='add-card'>
        <textarea placeholder='Enter a title for this card'></textarea>
        <Button classType={BUTTON_TYPES.GREEN} text='Add card'></Button>
    </div>
)

export default AddCard;