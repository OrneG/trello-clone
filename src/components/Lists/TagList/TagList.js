import React from 'react'
import Tag from 'components/Tag/Tag'

const TagList = ({tags, tagType}) => (
    tags.map(tag => 
        <Tag 
            key={tag.id}
            type={tagType}
            color={tag.color}
            name={tag.name}
        /> 
    )
)

export default TagList