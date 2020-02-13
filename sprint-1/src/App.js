import React from 'react';
import Header from './component/header/Header.js';
import Videolist from './component/videolist/Videolist.js';
import Comment from './component/comment/Comment.js'
import Form from './component/form/Form.js';
import vid0 from './assets/Images/video-list-0.jpg';
import vid1 from './assets/Images/video-list-1.jpg';
import vid2 from './assets/Images/video-list-2.jpg';
import vid3 from './assets/Images/video-list-3.jpg';
import vid4 from './assets/Images/video-list-4.jpg';
import vid5 from './assets/Images/video-list-5.jpg';
import vid6 from './assets/Images/video-list-6.jpg';
import vid7 from './assets/Images/video-list-7.jpg';
import vid8 from './assets/Images/video-list-8.jpg';


import './App.css';

class App extends React.Component {
  state = {
    videos:[
      {
          thumbnail: vid0,
          title: 'IDK',
          author: 'IDK REALLY'
      },
      {
          thumbnail:vid1,
          title: 'Become A Travel Pro In One Easy Lesson',
          author: 'Todd Welch'
      },
      {
          thumbnail:vid2,
          title: 'Les Houches The Hidden Gem Of The Chamonix',
          author: 'Cornelia Blair'
      },
      {
          thumbnail:vid3,
          title: 'Travel Health Useful Medical Information For',
          author: 'Glen Harper'
      },
      {
          thumbnail:vid4,
          title: 'Cheap Airline Tickets Great Ways To Save',
          author: 'Emily Harper'
      },
      {
          thumbnail:vid5,
          title:'Take A Romantic Break In A Boutique Hotel',
          author:'Ethan Owen'
      },
      {
          thumbnail:vid6,
          title:'Choose The Perfect Accommodations',
          author:'Lydia Perez'
      },
      {
          thumbnail:vid7,
          title:'Cruising Destination Ideas',
          author:'Timothy Austin'
      },
      {
          thumbnail:vid8,
          title:'Train Travel On Track For Safety',
          author:'Scotty Cranmer'
      }
  ]
}

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Comment />
        <h2>NEXT VIDEO</h2>
        <Videolist videos={this.state.videos}/>
      </div>
    )
  }}



export default App;
