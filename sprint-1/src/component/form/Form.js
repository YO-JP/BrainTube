import React, { Component } from 'react'
import userPic from '../../assets/Images/Mohan-muruge.jpg';

import './Form.scss';
export class Form extends Component {
    render() {
        return (
            <section className='form'>
            <p className='form__total'>3 Comments</p>
            <div className='form__container'>
            <img className="form__img" src ={userPic}/>
            <form className='form__form'>
                <h5 className='form__title'>JOIN THE CONVERSATION</h5>
                <textarea 
                    className='form__input' 
                    name="comment" 
                    placeholder="That was easily the most spectacular BMX moment ever." >
                </textarea>
                <button className='form__button'>COMMENT</button>
            </form>
            </div>
            </section>
        )
    }
}

export default Form
