import React from 'react'
import Tag, {TAG_TYPES} from 'components/Tag/Tag'
import Button, { BUTTON_TYPES, BUTTON_SIZES } from 'components/Button/Button'
import * as PopoverWrapper from 'react-awesome-popover'
import TagEditionPopover, { TAG_ACTION } from 'components/Popovers/TagEditionPopover/TagEditionPopover'
import './TagSelection.scss'
import tags from 'tags'
import TextInput from 'components/TextInput/TextInput';

const TagSelection = () => (
    <div className='tags'>
        <TextInput placeholder='Buscar etiquetas...' />
        {
            tags.map(tag =>
            <PopoverWrapper key={tag.id} placement='bottom'>
                <Tag 
                    type={TAG_TYPES.BIG}
                    color={tag.color}
                    name={tag.name}
                /> 
                <TagEditionPopover action={TAG_ACTION.EDIT} />
            </PopoverWrapper>
            )
        }
        <PopoverWrapper placement='bottom'>
            <Button
                type={BUTTON_TYPES.DEFAULT}
                size={BUTTON_SIZES.SHRINK} 
                text='Crear una etiqueta nueva'
                className='add-tag-btn'
            />
            <TagEditionPopover action={TAG_ACTION.CREATE} />
        </PopoverWrapper>                
    </div>  
)

export default TagSelection