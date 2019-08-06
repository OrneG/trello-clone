import React from 'react';
import Column from 'components/Column/Column';
import columns from 'columns';
import AddColumn from 'components/AddColumn/AddColumn';
import './ColumnContainer.scss';

const ColumnContainer = () => (
    <div className='column-container'>
        {
            columns.map(column => <Column key={column.id} title={column.title} cards={column.cards} />)
        }
        <AddColumn></AddColumn>
    </div>
)

export default ColumnContainer;