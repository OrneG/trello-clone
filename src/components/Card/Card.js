import React, { Component } from 'react';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
import Modal from 'components/Modal/Modal';
import uuid from 'uuid/v4';
import './Card.scss';

class Card extends Component {
    state = {
        modalVisible: false,
        description: '',
        comment: '',
        comments: []
    }
    toggleModal = () => {
        this.setState({ modalVisible: !this.state.modalVisible })
    }
    addCardDescription = event => {
        this.setState({ description: event.target.value })
    }
    addComment = () => {
        const newComment = {
            id: uuid(),
            text: this.state.comment,
        }
        const comments = this.state.comments.slice();
        comments.push(newComment)
        this.setState({ comment: '', comments: comments})
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
                    onAddDescription={this.addCardDescription}
                    description={this.state.description}
                    onClick={this.addComment}
                    comments={this.state.comments}/>
                }
            </>
        )
    }
}

export default Card;