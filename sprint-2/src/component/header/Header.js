import React, { Component } from 'react'
import {ReactComponent as Logo} from '../../assets/Logo/Logo-brainflix.svg';
import userPic from '../../assets/Images/Mohan-muruge.jpg';
import iconUpload from '../.././assets/Icons/SVG/Icon-upload.svg'

import './Header.scss'

function Header () {
 
        return (
            <header className='header'>
             <Logo className='header__logo' /> 
             <input className='header__search' placeholder='Search'></input>
             <div className='header__container'>
             <button class='header__button'><img class='header__button--icon'src={iconUpload}/> UPLOAD</button>
             <img className='header__img' src = {userPic} />
             </div>
            </header>
        )
}

export default Header
