import React from 'react';
import VideoPlayer from '.././component/VideoPlayer/VideoPlayer.js';
import Videolist from '.././component/VideoList/VideoList.js';
import CommentChild from '.././component/Comment/CommentChild.js';
import Form from '.././component/Form/Form.js';
import Description from '.././component/Description/Description.js';
import axios from 'axios';


import './Main.scss';

const apiKey = '18d52b96-7ad4-4743-9a1c-c49e20b0ad2d';


class Main extends React.Component {
  constructor(props) {
    super(props);
      this.state={
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
}}
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event =>{
    event.preventDefault ();
    if (this.props.match.params.id === undefined){
      axios.post(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments?api_key=${apiKey}`,
      {name:'BrainStation TA', comment: event.target.comment.value})
        .then ((response)=> 
          axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${apiKey}`))
            .then(newresponse => {
              this.setState({mainVideo: newresponse.data})
            })
        //event.target.reset function has to be outside }) 
        event.target.reset();
    }else{
      axios.post(`https://project-2-api.herokuapp.com/videos/${this.state.mainVideo.id}/comments?api_key=${apiKey}`,
      {name:'BrainStation TA', comment: event.target.comment.value})
        .then ((response)=> 
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${apiKey}`))
          .then(newresponse => {
            this.setState({mainVideo: newresponse.data})
          })
        event.target.reset();
      }
    }


componentDidMount(){
  axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
    .then(res => this.setState({videos: res.data}))
  axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${apiKey}`) 
    .then(response => this.setState({mainVideo: response.data}))
    }


componentDidUpdate(){
  if (this.props.match.params.id === undefined && this.state.mainVideo.id!== '1af0jruup5gu'){
    axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${apiKey}`) 
      .then(response => this.setState({mainVideo: response.data}))
  }else if(this.props.match.params.id === this.state.mainVideo.id){
    } else{
      axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${apiKey}`)
        .then(newresponse => this.setState({mainVideo: newresponse.data}))
    }
}
    

  render() {
    return (
        // if (!this.state.mainVideo){
        //return null;}
        <>
          
          <VideoPlayer mainVideo={this.state.mainVideo}/>
          <div className='desktop__viewParent'>
            <div className ='desktop__viewChildOne'>
              <Description mainVideo={this.state.mainVideo} />
              <Form mainVideo={this.state.mainVideo} comment={this.state.comment}  onSubmit={this.handleSubmit} />
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
