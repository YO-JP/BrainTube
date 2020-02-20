import React, { Component } from 'react';
import logoView from '../.././assets/Icons/SVG/Icon-views.svg'
import logoHeart from '../.././assets/Icons/SVG/Icon-likes.svg';
import './Description.scss'

export class Description extends Component {
    render() {
        return (
            <section className='description'>
                <h2 className='description__title'>{this.props.mainVideo.title}</h2>
                <div className='description__container--three'>
                <div className= 'description__container'>
                <p className='description__author'>By {this.props.mainVideo.channel}</p>
                <p className='description__date'>{new Date(this.props.mainVideo.timestamp).toLocaleDateString("en-US")}</p>
                </div>
                <div className='description__container--two'>
                <img src={logoView} alt=''/>
                <p className= 'description__num'>{this.props.mainVideo.views}</p>
                <img src={logoHeart} alt=''/>
                <p className= 'description__num description__num--right'>{this.props.mainVideo.likes}</p>
                </div>
                </div>
                <p className = 'description__para'>{this.props.mainVideo.description}</p>
            </section>
        )
    }
}

export default Description
