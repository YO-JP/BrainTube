import React from 'react';
import Header from '.././component/header/Header.js';
import Videoplayer from '.././component/videoplayer/Videoplayer.js'
import Videolist from '.././component/videolist/Videolist.js';
import CommentChild from '.././component/comment/commentChild/CommentChild.js'
import Form from '.././component/form/Form.js';
import Description from '.././component/description/Description.js'
import vid0 from '.././assets/Images/video-list-0.jpg';
import vid1 from '.././assets/Images/video-list-1.jpg';
import vid2 from '.././assets/Images/video-list-2.jpg';
import vid3 from '.././assets/Images/video-list-3.jpg';
import vid4 from '.././assets/Images/video-list-4.jpg';
import vid5 from '.././assets/Images/video-list-5.jpg';
import vid6 from '.././assets/Images/video-list-6.jpg';
import vid7 from '.././assets/Images/video-list-7.jpg';
import vid8 from '.././assets/Images/video-list-8.jpg';


import './Main.scss';

class Main extends React.Component {
  state = {
    videos:[
      {
          image: vid0,
          title: 'BMX Rampage:2018 Highlights',
          channel: 'Red Cow'      
      },
      {   
          image:vid1,
          title: 'Become A Travel Pro In One Easy Lesson',
          channel: 'Todd Welch'
      },
      {
          image:vid2,
          title: 'Les Houches The Hidden Gem Of The Chamonix',
          channel: 'Cornelia Blair'
      },
      {
          image:vid3,
          title: 'Travel Health Useful Medical Information For',
          channel: 'Glen Harper'
      },
      {
          image:vid4,
          title: 'Cheap Airline Tickets Great Ways To Save',
          channel: 'Emily Harper'
      },
      {
          image:vid5,
          title:'Take A Romantic Break In A Boutique Hotel',
          channel:'Ethan Owen'
      },
      {
          image:vid6,
          title:'Choose The Perfect Accommodations',
          channel:'Lydia Perez'
      },
      {
          image:vid7,
          title:'Cruising Destination Ideas',
          channel:'Timothy Austin'
      },
      {
          image:vid8,
          title:'Train Travel On Track For Safety',
          channel:'Scotty Cranmer'
      }
  ],
  mainVideo: {
    id:'0',
    image: vid0,
    title: 'BMX Rampage:2018 Highlights',
    channel: 'Red Cow',
    description:'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    views:'1,001,023',
    comments:[
      {
        name:'Michael Lyons',
        timestamp:'12/18/2018',
        comment:'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.'
    },
    {
        name:'Gary Wong',
        timestamp:'12/18/2018',
        comment:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        name:'Theodore Duncan',
        timestamp:'11/15/2018',
        comment:'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    }],
    likes:'110,985',
    duration:'00:42',
    timestamp:'12/18/2018',
    video:''    
}
}

  render() {
    return (
      <div>
        <Header />
        <Videoplayer mainVideo={this.state.mainVideo}/>
        <div className='desktop__viewParent'>
          <div className ='desktop__viewChildOne'>
            <Description mainVideo={this.state.mainVideo} />
            <Form mainVideo={this.state.mainVideo} />
            <CommentChild mainVideo={this.state.mainVideo}/>
          </div>
          <div>
            <h2 className='videolist__top'>NEXT VIDEO</h2>
            <Videolist videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }}



export default Main;
