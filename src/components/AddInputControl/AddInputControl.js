import React from 'react'
import Button, {BUTTON_TYPES, BUTTON_SIZES} from 'components/Button/Button'
import './AddInputControl.scss'
import TextInput from 'components/TextInput/TextInput';

export const INPUT_ELEMENTS = {
    TEXT: 'text',
    TEXTAREA: 'textarea'
}

const AddInputControl = ({inputElement = INPUT_ELEMENTS.TEXTAREA, placeholder, buttonType, buttonSize, buttonText}) => (
    <div className='add-input-control'>
        {
            inputElement === INPUT_ELEMENTS.TEXT &&
            <TextInput placeholder={placeholder} />
        }
        {
            inputElement === INPUT_ELEMENTS.TEXTAREA &&
            <textarea
                className='input' 
                placeholder={placeholder}
            />
        }
        <div>
            <Button 
                type={buttonType || BUTTON_TYPES.PRIMARY} 
                size={buttonSize || BUTTON_SIZES.SHRINK} 
                text={buttonText} 
            />
        </div>
    </div>
);
 
export default AddInputControl;