import React, { Component } from 'react'
import userPic from '../../assets/Images/Mohan-muruge.jpg';

import './Form.scss';
export class Form extends Component {
    render() {
        return (
            <div className='form'>
            <p>3 Comments</p>
            <img className="form__img" src ={userPic}/>
            <form>
                <textarea 
                    className='form__input' 
                    name="comment" 
                    placeholder="That was easily the most spectacular BMX moment ever." >
                </textarea>
                <button>COMMENT</button>
            </form>
            </div>
        )
    }
}

export default Form
