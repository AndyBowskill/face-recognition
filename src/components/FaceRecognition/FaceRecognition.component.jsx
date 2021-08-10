import React from 'react';
import './FaceRecognition.style.css';

const FaceRecognition = ({imageURL}) => {
    return (
        <div className="face-box flex">
            <img alt='' src={imageURL}  />
        </div>
    )
}

export default FaceRecognition;