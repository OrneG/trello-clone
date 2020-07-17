import React from 'react'
import AddInputControl, {INPUT_ELEMENTS} from 'components/AddInputControl/AddInputControl'
import CardList from 'components/Lists/CardList/CardList';
import './Column.scss'

const Column = ({title, cards}) => (
    <div className='column'>
        <p className='title'>{title}</p>
        <CardList cards={cards} />
        <AddInputControl 
            inputElement={INPUT_ELEMENTS.TEXTAREA}
            placeholder='Introduzca un título para esta tarjeta'
            buttonText='Añadir tarjeta'
        />   
    </div>
)

export default Column
