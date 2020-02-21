import React, { Component } from 'react';
import axios from 'axios';
import userPic from '../../assets/Images/Mohan-muruge.jpg';

import './Form.scss';

const apiKey = '18d52b96-7ad4-4743-9a1c-c49e20b0def6';

//Note for me - https://reactjs.org/docs/forms.html

export class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            comment: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange =event =>{
        this.setState({comment:event.target.value})
    }
    

    handleSubmit = event =>{
        event.preventDefault ();

        axios.post(`https://project-2-api.herokuapp.com/videos/${this.props.mainVideo.id}/comments?api_key=${apiKey}`,{name:'BrainStation TA TEAM', comment: this.state.comment})
            .then(res => {
                console.log(res.data)
            })
    }
    
    render() {
        return (
            <section className='form'>
            <p className='form__total'>{this.props.mainVideo.comments.length} Comments</p>
            <div className='form__container'>
            <img className="form__img" src ={userPic} alt='Mohan is the man'/>
            <form className='form__form' onSubmit={this.handleSubmit}>
                <div className='form__container--two'>
                    <h5 className='form__title'>JOIN THE CONVERSATION</h5>
                    <textarea 
                        className='form__input' 
                        name="comment" 
                        placeholder="That was easily the most spectacular BMX moment ever." 
                        maxLength="200"
                        onChange={this.handleChange}>
                    </textarea>
                </div>
                <button type="submit" className='form__button'>COMMENT</button>
            </form>
            </div>
            </section>
        )
    }
}

export default Form
