import React from 'react';
import Button, {BUTTON_TYPES} from 'components/Button/Button'
import './AddCard.scss'

const AddCard = () => (
    <div className='add-card-control'>
        <div className='add-card-form'>
            <textarea
                className='card-title-input' 
                placeholder='Introduzca un título para esta tarjeta'
            />
            <div>
                <Button type={BUTTON_TYPES.PRIMARY} text='Añadir tarjeta' />
            </div>
        </div>
    </div>
);
 
export default AddCard;