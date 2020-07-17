import React from 'react'
import Button, {BUTTON_TYPES} from 'components/Button/Button'
import './AddColumn.scss'

const AddColumn = () => (
    <div className='add-column-control'>
        <input
            type='text'
            className='column-title-input' 
            placeholder='Introduzca un título para esta columna'
        />
        <div>
            <Button type={BUTTON_TYPES.PRIMARY} text='Añadir colummna' />
        </div>
    </div>
);
 
export default AddColumn;