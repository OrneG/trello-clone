import React from 'react';
import { faStickyNote } from '@fortawesome/free-regular-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import Modal from 'components/Modals/Modal/Modal'
import EditCardModalActions from './CardModalActions/CardModalActions'
import CardModalDescription from './CardModalDescription/CardModalDescription'
import CardModalAddComment from './CardModalAddComment/CardModalAddComment'
import TitleWithIcon, {TITLE_SIZE} from 'components/TitleWithIcon/TitleWithIcon'
import CommentList from 'components/Lists/CommentList/CommentList'
import './CardModal.scss'

const comments = [
    {
        id: 1,
        text: 'asdasd',
        username: 'Ada Lovelace'
    },
    {
        id: 2,
        text: 'asdasd',
        username: 'Ada Lovelace'
    }
]

const EditCardModal = () => (
    <Modal>
        <div className='modal-header'>
            <TitleWithIcon icon={faStickyNote} title='Titulo' size={TITLE_SIZE.BIG} />
        </div>
        <div className='modal-body'>
            <div className='main-content'>
                <div className='control-section'>
                    <CardModalDescription />
                </div>
                <div className='control-section'>
                    <CardModalAddComment />
                </div>    
                <div className='control-section'> 
                    <TitleWithIcon icon={faList} title='Actividad' size={TITLE_SIZE.MEDIUM} />
                    <CommentList comments={comments} />
                </div>
            </div>
            <EditCardModalActions />
        </div>
    </Modal>
)

export default EditCardModal