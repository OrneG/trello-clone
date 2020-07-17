import React from 'react'
import TagList from 'components/Lists/TagList/TagList'
import {TAG_TYPES} from 'components/Tag/Tag'
import './Card.scss'

const Card = ({tags, title}) => (
    <div className='card'>
        <div className='tags'>
            <TagList tags={tags} tagType={TAG_TYPES.SMALL} />
        </div>
        <p>{title}</p>
    </div>
)
 
export default Card