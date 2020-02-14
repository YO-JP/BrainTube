import React, { Component } from 'react';
import logoView from '../.././assets/Icons/SVG/Icon-views.svg'
import logoHeart from '../.././assets/Icons/SVG/Icon-likes.svg';
import './Description.scss'

export class Description extends Component {
    render() {
        return (
            <section className='description'>
                <h2 className='description__title'>BMX Rampage:2018 Highlights</h2>
                <div className= 'description__container'>
                <p className='description__author'>By Red Cow</p>
                <p className='description__date'>12/18/2018</p>
                </div>
                <div className='description__container--two'>
                <img src={logoView}/>
                <p className= 'description__num'>1,001,023</p>
                <img src={logoHeart}/>
                <p className= 'description__num'>110,985</p>
                </div>
                <p className = 'description__para'>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
            </section>
        )
    }
}

export default Description
