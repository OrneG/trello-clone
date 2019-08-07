import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavInput.scss';

class NavInput extends Component {
    state = {
        large: false
    }
    enlargeInput = () => {
        this.setState({ large: !this.state.large })
    }
    render() {
        return (
            <>
            <input type='text' className='nav-input'
            // style={{
            //     width: 300
            //     backgrondColor: white
            // }}
            >
            </input>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </>
        )
    }
}

export default NavInput;