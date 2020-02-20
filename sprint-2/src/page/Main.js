import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Videoplayer from '.././component/videoplayer/Videoplayer.js';
import Videolist from '.././component/videolist/Videolist.js';
import CommentChild from '.././component/comment/commentChild/CommentChild.js';
import Form from '.././component/form/Form.js';
import Description from '.././component/description/Description.js';
import axios from 'axios';


import './Main.scss';

const apiKey = '18d52b96-7ad4-4743-9a1c-c49e20b0def6';
const Child = ({match}) => (
  <div>
    <h2>ID:{match.params.id}</h2>
  </div>
)

class Main extends React.Component {
  state = {
    videos:[],
    mainVideo: {
    id:'',
    image: '',
    title: '',
    channel: '',
    description:'',
    views:'',
    comments:[],
    likes:'',
    duration:'',
    timestamp:'',
    video:''    
}
}



componentDidMount(){
  axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
    .then(res => this.setState({videos: res.data}))
  axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${apiKey}`) 
    .then(response => this.setState({mainVideo: response.data}))
    }
componentDidUpdate(){
  axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${apiKey}`)
}
    

  render() {
    return (
      
        <>
          
          <Videoplayer mainVideo={this.state.mainVideo}/>
          <div className='desktop__viewParent'>
            <div className ='desktop__viewChildOne'>
              <Description mainVideo={this.state.mainVideo} />
              <Form mainVideo={this.state.mainVideo} />
              <CommentChild mainVideo={this.state.mainVideo}/>
            </div>
            <div>
              <h2 className='videolist__top'>NEXT VIDEO</h2>
              <Videolist videos={this.state.videos} mainVideo={this.state.mainVideo}/>
            </div>
          </div>
          </>
      
    )
  }}



export default Main;
