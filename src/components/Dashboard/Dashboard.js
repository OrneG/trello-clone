import React from 'react'
import ColumnList from 'components/Lists/ColumnList/ColumnList'
import AddInputControl, {INPUT_ELEMENTS} from 'components/AddInputControl/AddInputControl';
import columns from 'data'
import './Dashboard.scss'

const Dashboard = ({title}) => (
    <div className='dashboard'>
        <h2 className='title'>{title}</h2>
        <div className='columns'>
            <ColumnList columns={columns} />        
            <AddInputControl 
                inputElement={INPUT_ELEMENTS.TEXT}
                placeholder='Introduzca un título para esta tarjeta'
                buttonText='Añadir tarjeta'
            />        
        </div>
    </div>
)

export default Dashboard