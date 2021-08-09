import React from 'react';
import './ImageLinkForm.style.css';

const ImageLinkForm = () => {
    return (
        <div className='form-box flex'>
            <div className='form-inner'>
                <p>This will detect the faces in your image. Give it a go!</p>
                <input type='text' placeholder='Please enter your image' />
                <button>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;