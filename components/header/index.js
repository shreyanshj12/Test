import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import './style.css';
const Header = () => {
    return (
        <div className='header'>
            <h3 className='flow'>Flow</h3>
            <div className='user-profile'><FaUserAlt /></div>
        </div>

    )
}

export default Header;
