import React, { Component } from 'react';
import Button, { BUTTON_TYPES } from 'components/Button/Button';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import TagContainer from 'components/TagContainer/TagContainer';
import './BoardHeaderRightContainer.scss';

class BoardHeaderRightContainer extends Component {
    state = {
        tagContainerVisible: false
    }
    openTagContainer = () => {
        this.setState({ tagContainerVisible: true })
    }
    closeTagContainer = () => {
        this.setState({ tagContainerVisible: false })
    }
    render() {
        return (
            <div className='board-right-container'>
                <div onClick={this.openTagContainer}>
                <Button text='Show menu' classType={BUTTON_TYPES.TRANSPARENT}
                icon={faEllipsisH} ></Button>
                </div>
                {
                    this.state.tagContainerVisible &&
                <TagContainer onClose={this.closeTagContainer} />
                }
            </div>
        )
    }
}

export default BoardHeaderRightContainer;