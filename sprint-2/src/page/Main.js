import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import VideoPlayer from '.././component/VideoPlayer/VideoPlayer.js';
import Videolist from '.././component/VideoList/VideoList.js';
import CommentChild from '.././component/Comment/CommentChild.js';
import Form from '.././component/Form/Form.js';
import Description from '.././component/Description/Description.js';
import axios from 'axios';


import './Main.scss';

const apiKey = '18d52b96-7ad4-4743-9a1c-c49e20b0def6';


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
  if (this.props.match.params.id == undefined && this.state.mainVideo.id!== '1af0jruup5gu'){
    axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${apiKey}`) 
    .then(response => this.setState({mainVideo: response.data}))
  }else if(this.props.match.params.id == this.state.mainVideo.id){
    } else{
      axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${apiKey}`)
      .then(newresponse => this.setState({mainVideo: newresponse.data}))
    }
}
    

  render() {
    return (
      
        <>
          
          <VideoPlayer mainVideo={this.state.mainVideo}/>
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
