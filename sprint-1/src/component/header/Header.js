import React, { Component } from 'react'
import {ReactComponent as Logo} from '../../assets/Logo/Logo-brainflix.svg';
import userPic from '../../assets/Images/Mohan-muruge.jpg';

import './Header.scss'

function Header () {
 
        return (
            <header className='header'>
             <Logo /> 
             <input placeholder='Search'></input>
             <button>+ UPLOAD</button>
             <img className='header__img' src = {userPic} />
            </header>
        )
}

export default Header
