import React from 'react'
import {faAlignLeft} from '@fortawesome/free-solid-svg-icons'
import TitleWithIcon, {TITLE_SIZE} from 'components/TitleWithIcon/TitleWithIcon'
import AddInputControl, {INPUT_ELEMENTS} from 'components/AddInputControl/AddInputControl'
import {BUTTON_TYPES, BUTTON_SIZES} from 'components/Button/Button'

const CardModalDescription = () => (
    <>
        <TitleWithIcon icon={faAlignLeft} title='Descripción' size={TITLE_SIZE.MEDIUM} />
        <AddInputControl 
            inputElement={INPUT_ELEMENTS.TEXTAREA}
            placeholder='Introduzca una descripción'
            buttonType={BUTTON_TYPES.PRIMARY}
            buttonSize={BUTTON_SIZES.SHRINK}
            buttonText='Editar descripción'
        />
    </>
)

export default CardModalDescription