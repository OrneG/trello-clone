import React, {Component} from 'react';
import ModalDescription from 'components/ModalDescription/ModalDescription';
import ModalComents from 'components/ModalComents/ModalComents';
import './ModalContainer.scss';

class ModalContainer extends Component {
  render() {
    const { onChange, value } = this.props
    return (
      <div className='modal-container'>
      <ModalDescription onChange={onChange} value={value}></ModalDescription>
      <ModalComents></ModalComents>
  </div> 
    )
  }
}

export default ModalContainer;