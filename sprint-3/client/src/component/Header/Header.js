import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/Logo/Logo-brainflix.svg';
import userPic from '../../assets/Images/Mohan-muruge.jpg';
import iconUpload from '../.././assets/Icons/SVG/Icon-upload.svg'

import './Header.scss'

//Trouble with css of elements in div. TO fix alignment of logo, gave className and centered logo in it. gave same className to Link for button
function Header () {
 
        return (
            <header className='header'>
                <Link to='/' className='header__logo__parent'><Logo className='header__logo' /></Link>
                <input className='header__search' placeholder='Search'></input>
                <div className='header__container'>
                    <Link to='/upload' className='header__button'>
                        <button className='header__button'>
                            <img className='header__button--icon'src={iconUpload} alt='upload'/> UPLOAD
                        </button>
                    </Link>
                    <img className='header__img' src = {userPic} alt='user profile pic'/>
                </div>
            </header>
        )
}

export default Header
