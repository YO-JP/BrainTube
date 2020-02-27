import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import videoThumbnail from '../assets/Images/Upload-video-preview.jpg'
import './Upload.scss';

//Code Reference for me
// https://reactjs.org/docs/forms.html

class Upload extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            description: ''
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit = event =>{
        event.preventDefault ();
        const config ={headers:{'Content-Type':'application/json'}}
        const uploadDetail = {
            title: this.state.title,
            description: this.state.description
        }
          axios.post('/api/video',
          { uploadDetail },config
        )
            .then ((response)=> console.log(this.state.title))
            //event.target.reset function has to be outside }) 
            event.target.reset();
        };

        handleInputChange (event) {
            const target=event.target;
            const value = target.value;
            const name =target.name;

            this.setState(
                {
                    [name]: value
                }
            );
            console.log(event.target.value)
        }

    render (){
        return(
        <section className="upload">
            <h2 className="upload__title">Upload Video</h2>
            <form onSubmit = {this.handleSubmit}>
            <div className="upload__containerLarge">
                <div className="upload__topContainer">
                    <p className="upload__label">VIDEO THUMBNAIL</p>
                    <img className="upload__img" src={videoThumbnail} alt="add video thumbnail here" />
                </div>
                <div className="upload__containerMedium">
                    <div className='upload__upperContainer'>
                        <label for="uploadTitle" className="upload__label">TITLE YOUR VIDEO</label>
                        <input type="text" name="title" placeholder="Add a title to your video" maxLength="50" className='upload__inputTitle' onChange={this.handleInputChange} required></input>
                    </div>
                    <div className='upload__middleContainer'>
                        <label for="uploadDescription" className="upload__label">ADD A VIDEO DESCRIPTION</label>
                        <textarea name="description" placeholder="Add a description of your video" maxLength="200" className="upload__inputDesc" onChange={this.handleInputChange} required></textarea>
                    </div>
                </div>
            </div>
            <div className='upload__bottomContainer'>
                <button type="submit" className='upload__buttonChild'>PUBLISH</button>
                <Link to="/" className="upload__cancel">CANCEL</Link>
            </div>
            </form>
        </section>
        )
    }
}

export default Upload;