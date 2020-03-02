import React from 'react';
import VideoPlayer from '.././component/VideoPlayer/VideoPlayer.js';
import Videolist from '.././component/VideoList/VideoList.js';
import CommentChild from '.././component/Comment/CommentChild.js';
import Form from '.././component/Form/Form.js';
import Description from '.././component/Description/Description.js';
import axios from 'axios';


import './Main.scss';


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
        comments: [],
        likes:'',
        duration:'',
        timestamp:'',
        video:''       
      },
      tempComment:{
        comment: ''
      }
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event =>{
    event.preventDefault ();
    const newCommentData = {
      comment: this.state.tempComment
    }
    
    if (this.props.match.params.id === undefined){
      axios.post('/api/video/1af0jruup5gu',
      {newCommentData})
        .then ((response)=> 
          axios.get('/api/video/1af0jruup5gu'))
            .then(newresponse => {
              this.setState({mainVideo: newresponse.data})
            })
        //event.target.reset function has to be outside }) 
        event.target.reset();
    }else{
      axios.post(`/api/video/${this.state.mainVideo.id}`,
      {newCommentData})
        .then ((response)=> 
        axios.get(`/api/video/${this.props.match.params.id}`))
          .then(newresponse => {
            this.setState({mainVideo: newresponse.data})
          })
        event.target.reset();
      }
    }

    handleChange = event => {
      this.setState({tempComment: event.target.value})
    }
  

componentDidMount(){
  axios.get('/api/video')
    .then(res => this.setState({videos: res.data}))
  axios.get('/api/video/1af0jruup5gu') 
    .then(response => this.setState({mainVideo: response.data}))
    
    }


componentDidUpdate(){
  if (this.props.match.params.id === undefined && this.state.mainVideo.id!== '1af0jruup5gu'){
    axios.get('/api/video/1af0jruup5gu') 
      .then(response => this.setState({mainVideo: response.data}))
  }else if (this.props.match.params.id === undefined && this.state.mainVideo.id ==='1af0jruup5gu'){
  }
  else if(this.props.match.params.id === this.state.mainVideo.id){
    } else{
      axios.get(`/api/video/${this.props.match.params.id}`)
        .then(newresponse => this.setState({mainVideo: newresponse.data}))
    }
}
//Like Function
handleLike = event =>{
  event.preventDefault ();
    axios.put(`/api/video/${this.state.mainVideo.id}/likes`)
      .then(res => this.setState({mainVideo: res.data}))
  }
    

  render() {
    return (
        <>
          
          <VideoPlayer mainVideo={this.state.mainVideo}/>
          <div className='desktop__viewParent'>
            <div className ='desktop__viewChildOne'>
              <Description mainVideo={this.state.mainVideo}  onClick={this.handleLike}/>
              <Form mainVideo={this.state.mainVideo} onChange={this.handleChange}  onSubmit={this.handleSubmit}/>
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
