import React, { Component } from 'react';
import tags from 'tags';
import Tag, { TAG_TYPES } from 'components/Tag/Tag';
// import Button, { BUTTON_TYPES } from 'components/Button/Button';
import './TagContainer.scss';

class TagContainer extends Component {
    state = {
        visible: false
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        return (
            <div className='tag-container'>
                <h2 className='h2'>Labels</h2>
                <input className='input' type='text' placeholder='Search labels...'></input>
                {
                    tags.map(tag => <Tag
                        type={TAG_TYPES.BIG}
                        key={tag.id}
                        name={tag.name}
                        color={tag.color} />)
                }
                <div>
                    {/* {
                        !this.state.visible &&
                        <div onClick={this.toggle}>
                            <Button classType={BUTTON_TYPES.TRANSPARENT} text='Create a new label'></Button>
                        </div>
                    } */}
                </div>
            </div>
        )
    }
}

export default TagContainer;