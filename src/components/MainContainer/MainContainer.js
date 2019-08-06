import React from 'react';
import NavHeader from 'components/NavHeader/NavHeader';
import ColumnContainer from 'components/ColumnContainer/ColumnContainer';
import './MainContainer.scss';

const MainContainer = () => (
  <div className='main-container'>
  <NavHeader></NavHeader>
  <ColumnContainer></ColumnContainer>
  </div>
)

export default MainContainer;