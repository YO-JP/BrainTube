import React, { Component } from 'react'
import dogPic from '../../.././assets/Images/cute-dog-pic.jpg';

import './CommentChild.scss';

export class CommentChild extends Component{
    render(){
        return this.props.comments.map((comment)=>(
           <section className='commentChild'> 
                <img className='commentChild__img' src={dogPic}/>
                <div className = 'commentChild__containerParent'>
                <div className= 'commentChild__containerChild'>
                <p className='commentChild__name'>{comment.name}</p>
                <p className='commentChild__date'>{comment.timestamp}</p>
                </div>
                <p className='commentChild__comment'>{comment.comment}</p>
                </div>
                
            </section>
        ))
    }
}
export default CommentChild
