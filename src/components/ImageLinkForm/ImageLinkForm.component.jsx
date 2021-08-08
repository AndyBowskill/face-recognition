import React from 'react';
import './ImageLinkForm.style.css';

const ImageLinkForm = () => {
    return (
        <div className='box flex'>
            <input type='text' placeholder='Please enter your image' />
            <button>Detect The Faces</button>
        </div>
    )
}

export default ImageLinkForm;