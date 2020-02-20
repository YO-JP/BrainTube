import React from 'react';
import {Link} from 'react-router-dom';
import videoThumbnail from '../assets/Images/Upload-video-preview.jpg'
import './Upload.scss';

class Upload extends React.Component {


    render (){
        return(
        <section className="upload">
            <h2 className="upload__title">Upload Video</h2>
            <div className="upload__containerLarge">
                <div className="upload__topContainer">
                    <p className="upload__label">VIDEO THUMBNAIL</p>
                    <img className="upload__img" src={videoThumbnail} alt="add video thumbnail here" />
                </div>
                <div className="upload__containerMedium">
                    <div className='upload__upperContainer'>
                        <label for="uploadTitle" className="upload__label">TITLE YOUR VIDEO</label>
                        <input type="text" name="uploadTitle" placeholder="Add a title to your video" maxLength="50" className='upload__inputTitle'></input>
                    </div>
                    <div className='upload__middleContainer'>
                        <label for="uploadDescription" className="upload__label">ADD A VIDEO DESCRIPTION</label>
                        <textarea name="uploadDescription" placeholder="Add a description of your video" maxLength="200" className="upload__inputDesc"></textarea>
                    </div>
                </div>
            </div>
            <div className='upload__bottomContainer'>
                <Link to="/" className='upload__button'><button className='upload__buttonChild'>PUBLISH</button></Link>
                <Link to="/" className="upload__cancel">CANCEL</Link>
            </div>
        </section>
        )
    }
}

export default Upload;