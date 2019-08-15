import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import Comment from 'components/Comment/Comment';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import './ModalComents.scss';
import { ModalContextConsumer } from 'components/Contexts/ModalContext';

class ModalComents extends Component {
    render() {
        return (
            <ModalContextConsumer>
                {
                    ({onClick, comments, comment}) => (
                        <div className='modal-coments'>
                        <h2 className='h2'>
                            <FontAwesomeIcon className='icon' icon={faComment}></FontAwesomeIcon>Add Comment
                    </h2>
                        <textarea className='textarea' placeholder='Write a comment...' comment={comment}></textarea>
                        <div onClick={onClick}>
                            <Button classType={BUTTON_TYPES.GREEN} text='Guardar'></Button>
                        </div>
                        {
                            comments.map(comment => <Comment key={comment.id} username='OrneG' text={comment.text} />)
                        }
                    </div>
                    )
                }
            </ModalContextConsumer>
        )
    }
}

export default ModalComents;