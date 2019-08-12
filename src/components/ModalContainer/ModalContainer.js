import React, {Component} from 'react';
import ModalDescription from 'components/ModalDescription/ModalDescription';
import ModalComents from 'components/ModalComents/ModalComents';
import './ModalContainer.scss';

class ModalContainer extends Component {
  render() {
    const { onClick, onAddDescription, description, comments } = this.props
    return (
      <div className='modal-container'>
      <ModalDescription onAddDescription={onAddDescription} description={description}></ModalDescription>
      <ModalComents onClick={onClick} comments={comments}></ModalComents>
  </div> 
    )
  }
}

export default ModalContainer;