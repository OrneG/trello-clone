import React from 'react';
import Tag, {TAG_TYPES} from 'components/Tag/Tag';
// import Modal from 'components/Modal/Modal';
import './Card.scss';


// // openModal() {
// //     Modal.style.visibility = ' visible';
// // }
// onClick={() => this.openModal()}

const Card = ({tags, title, text}) => (
    <div className='card'>
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

export default Card;