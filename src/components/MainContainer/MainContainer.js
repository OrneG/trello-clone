import React, {Component} from 'react';
import NavHeader from 'components/NavHeader/NavHeader';
import ColumnContainer from 'components/ColumnContainer/ColumnContainer';
import BoardHeader from 'components/BoardHeader/BoardHeader';
import './MainContainer.scss';

class MainContainer extends Component {
  render() {
    return (
      <div className='main-container'>
      <NavHeader></NavHeader>
      <BoardHeader></BoardHeader>
      <ColumnContainer></ColumnContainer>
      </div>
    )
  }
}

export default MainContainer;