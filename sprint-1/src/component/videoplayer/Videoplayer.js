import React, { Component } from 'react';
import VideoplayerVideo from '../.././assets/Video/BrainStation-Sample-Video.mp4';
import iconPlay from '../.././assets/Icons/SVG/Icon-play.svg';
import iconVolume from '../.././assets/Icons/SVG/Icon-volume.svg';
import iconFullscreen from '../.././assets/Icons/SVG/Icon-fullscreen.svg';

import './Videoplayer.scss';

export class Videoplayer extends Component {
    render() {
        return (
            <section className='video'>
                <div className='video__wrapper'>
                    <video className='video__src' poster={this.props.mainVideo.image}>
                        <source src={VideoplayerVideo}/>
                    </video>
                    <div className='video__controls'>
                        <button className='video__play'><img src={iconPlay}/></button>
                        <div className='video__slider'>
                        <div className='video__slider--line'></div><p className='video__time'>0:00 / {this.props.mainVideo.duration}</p>
                        </div>
                            <div className='video__right'>
                            <button className='video__fullscreen'><img src={iconFullscreen}/></button>
                            <button className='video__volume'><img src={iconVolume}/></button>
                            </div>
                    </div>
                </div>
            </section>    
        )
    }
}

export default Videoplayer
