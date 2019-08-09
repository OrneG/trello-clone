import React, { Component } from 'react';
import Column from 'components/Column/Column';
// import columns from 'columns';
import AddColumn from 'components/AddColumn/AddColumn';
import uuid from 'uuid/v4';
import './ColumnContainer.scss';
import 'components/AddColumn/AddColumn.scss'

class ColumnContainer extends Component {
    state = {
        visible: false,
        columnName: '',
        columns: []
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    ingresarNombreColumna = evento => {
        this.setState({ columnName: evento.target.value })
    }
    agregarColumna = () => {
        const nuevaColumna = {
            id: uuid(),
            title: this.state.columnName,
            cards: []
        }
        const nuevoArray = this.state.columns.slice();
        nuevoArray.push(nuevaColumna)
        this.setState({ columnName: '', columns: nuevoArray })
    }
    render() {
        return (
            <div className='column-container'>
                {
                    this.state.columns.map(column => <Column key={column.id} title={column.title} cards={column.cards} />)
                }
                <AddColumn onChange={this.ingresarNombreColumna}
                    value={this.state.columnName}
                    onClick={this.agregarColumna}
                ></AddColumn>
            </div>
        )
    }
}

export default ColumnContainer;