import React, { Component } from 'react';
import tags from 'tags';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
import CloseButton from 'components/CloseButton/CloseButton';
import './TagContainer.scss';

class TagContainer extends Component {
    render() {
        const { onClose } = this.props
        return (
            <div className='tag-container'>
                    <h2 className='h2'>Labels</h2>
                    <div onClick={onClose}>
                        <CloseButton></CloseButton>
                    </div>
                <input className='input' type='text' placeholder='Search labels...'></input>
                {
                    tags.map(tag => <Tag
                        type={TAG_TYPES.BIG}
                        key={tag.id}
                        name={tag.name}
                        color={tag.color} />)
                }
            </div>
        )
    }
}

export default TagContainer;