import React, {Component} from 'react';
import Tag, {TAG_TYPES} from 'components/Tag/Tag';
// import Modal from 'components/Modal/Modal';
import './Card.scss';

// const Card = ({tags, title, text}) => (
//     <div className='card'>
//         <div className='tags'>
//             {
//                 tags.map(tag => <Tag
//                     key={tag.id}
//                     name={tag.name}
//                     type={TAG_TYPES.SMALL}
//                     color={tag.color}/>)
//             }
//         </div>
//         <p className='card-title'>{title}</p>
//         <p className='card-text'>{text}</p>
//     </div>
// )

class Card extends Component {
    state = {
        visible: false
    }
    openModal = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        const {tags, title, text} = this.props
        return (
            <div className='card'
            onClick={this.openModal}>
            <div className='tags'>
                {
                    tags.map(tag => <Tag
                        key={tag.id}
                        name={tag.name}
                        type={TAG_TYPES.SMALL}
                        color={tag.color}/>)
                }
            </div>
            <p className='card-title'>{title}</p>
            <p className='card-text'>{text}</p>
        </div>
        )
    }
}

export default Card;