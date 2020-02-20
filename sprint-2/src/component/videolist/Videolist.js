import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Videolist.scss';




export class Videolist extends Component{
    render(){
        return this.props.videos.filter(videos=> videos.id!==this.props.mainVideo.id).map((video)=>(
            <div key={video.id}>
                <Link to={`/video/${video.id}`} className='videolist'> 
                    <img className='videolist__img' src={video.image} alt='video thumbnail'/>
                    <div className='videolist__container'>
                        <p className='videolist__title'>{video.title}</p>
                        <p className='videolist__author'>{video.channel}</p>
                    </div>
                </Link>
            </div>
        ))
}
}

export default Videolist;