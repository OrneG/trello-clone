import React from 'react'
import Popover from 'components/Popovers/Popover/Popover'
import Button, { BUTTON_TYPES } from 'components/Button/Button'
import './TagEditionPopover.scss'
import TextInput from 'components/TextInput/TextInput';

export const TAG_ACTION = {
    EDIT: {
        name: 'edit',
        title: 'Cambiar etiqueta',
        button: 'Guardar'
    },
    CREATE: {
        name: 'create',
        title: 'Crear etiqueta',
        button: 'Crear'
    }
}

const TagEditionPopover = ({action}) => (
    <Popover title={action.title}>
        <TextInput label='Nombre' />
        <Button type={BUTTON_TYPES.PRIMARY} text={action.button}/>
    </Popover>
)

export default TagEditionPopover