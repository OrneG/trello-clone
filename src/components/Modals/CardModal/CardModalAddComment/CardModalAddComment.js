import React from 'react'
import {faComment} from '@fortawesome/free-regular-svg-icons'
import TitleWithIcon, {TITLE_SIZE} from 'components/TitleWithIcon/TitleWithIcon'
import AddInputControl, {INPUT_ELEMENTS} from 'components/AddInputControl/AddInputControl'
import {BUTTON_TYPES, BUTTON_SIZES} from 'components/Button/Button'

const CardModalAddComment = () => (
    <>
        <TitleWithIcon icon={faComment} title='Comentarios' size={TITLE_SIZE.MEDIUM} />
        <AddInputControl 
            inputElement={INPUT_ELEMENTS.TEXTAREA}
            placeholder='Introduzca un comentario para esta tarjeta'
            buttonType={BUTTON_TYPES.DEFAULT}
            buttonSize={BUTTON_SIZES.SHRINK}
            buttonText='Añadir comentario'
        />
    </>        
)

export default CardModalAddComment