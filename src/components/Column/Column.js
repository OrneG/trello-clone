import React from 'react';
import Card from 'components/Card/Card';
import AddCard from 'components/AddCard/AddCard';
import './Column.scss';

const Column = ({title, cards}) => (
    <div className='column'>
        <p className='column-p'>{title}</p>
        {
            cards.map(card => <Card
                key={card.id}
                title={card.title}
                text={card.text}
                tags={card.tags}/>)
        }
        <AddCard></AddCard>
    </div>
)

export default Column;