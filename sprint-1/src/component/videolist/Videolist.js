import React, { Component } from 'react'
import './Videolist.scss';




export class Videolist extends Component{
    render(){
        console.log(this.props.videos)
        return this.props.videos.map((video)=>(
           <div className='videolist'> 
            <img className='videolist__img'src={video.thumbnail}/>
            <div className='videolist__container'>
            <p className='videolist__title'>{video.title}</p>
            <p className='videolist__author'>{video.author}</p>
            </div>
            </div>
        ))
    }
}
export default Videolist;