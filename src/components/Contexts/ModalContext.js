import React, {Component} from 'react';
import uuid from 'uuid/v4';

const ModalContext = React.createContext();

class ModalContextProvider extends Component {
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
    addNewComment = event => {
        this.setState({ comment:event.target.value })
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
        return (
            <ModalContext.Provider
            value = {{
                modalVisible: this.state.modalVisible,
                description: this.description,
                comment: this.state.comment,
                comments: this.state.comments,
                toggleModal: this.toggleModal,
                addCardDescription: this.addCardDescription,
                addNewComment: this.addNewComment,
                onClick: this.addComment
            }}>
                {this.props.children}
            </ModalContext.Provider>
        )
    }
}

export const ModalContextConsumer = ModalContext.Consumer
export default ModalContextProvider;