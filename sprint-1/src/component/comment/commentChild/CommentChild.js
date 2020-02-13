import React, { Component } from 'react'
import dogPic from '../../.././assets/Images/cute-dog-pic.jpg';

import './CommentChild.scss';

export class CommentChild extends Component{
    render(){
        console.log(this.props.comments)
        return this.props.comments.map((comment)=>(
           <div className='commentChild'> 
                <img className='commentChild__img' src={dogPic}/>
                <p className='commentChild__name'>{comment.name}</p>
                <p className='commentChild_timestamp'>{comment.timestamp}</p>
                <p className='commentChild__comment'>{comment.comment}</p>
                
            </div>
        ))
    }
}
export default CommentChild
