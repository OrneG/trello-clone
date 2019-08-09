import React, { Component } from 'react';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
import Modal from 'components/Modal/Modal';
import uuid from 'uuid/v4';
import './Card.scss';

class Card extends Component {
    state = {
        modalVisible: false,
        description: '',
    }
    toggleModal = () => {
        this.setState({ modalVisible: !this.state.modalVisible })
    }
    ingresarDescripcionTarjeta = evento => {
        this.setState({ description: evento.target.value })
    }
    agregarDescripcion = () => {
        const nuevaDescripcion = {
            id: uuid(),
            title: this.state.description,
        }
        const nuevoArray = this.state.cards.slice();
        nuevoArray.push(nuevaDescripcion)
        this.setState({ description: '' })
    }
    render() {
        const { tags, title, text } = this.props
        return (
            <>
                <div className='card'
                    onClick={this.toggleModal}>
                    <div className='tags'>
                        {
                            tags.map(tag => <Tag
                                key={tag.id}
                                name={tag.name}
                                type={TAG_TYPES.SMALL}
                                color={tag.color} />)
                        }
                    </div>
                    <p className='card-title'>{title}</p>
                    <p className='card-text'>{text}</p>
                </div>
                {
                    this.state.modalVisible &&
                    <Modal onClose= {this.toggleModal}
                    onChange={this.ingresarDescripcionTarjeta}
                    value={this.state.description}/>
                }
            </>
        )
    }
}

export default Card;