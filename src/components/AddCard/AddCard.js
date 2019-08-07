import React, { Component } from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddCard.scss';

class AddCard extends Component {
    state = {
        visible: false
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        return (
            <div className='add-card'>
                <div className='add-card-form'
                    style={{
                        display: this.state.visible ? 'block' : 'none'
                    }}
                >
                    <textarea placeholder='Enter a title for this card...'></textarea>
                    <div className='add-card-buttons'>
                        <Button classType={BUTTON_TYPES.GREEN} text='Add card'></Button>
                        <div onClick={this.toggle}>
                            <Button classType={BUTTON_TYPES.SQUARE} icon={faTimes}></Button>
                        </div>
                    </div>
                </div>
                {
                    !this.state.visible &&
                    <div onClick={this.toggle}>
                        <Button classType={BUTTON_TYPES.TRANSPARENT} text='Agregar tarjeta' icon={faPlus}></Button>
                    </div>
                }
            </div>
        )
    }
}

export default AddCard;