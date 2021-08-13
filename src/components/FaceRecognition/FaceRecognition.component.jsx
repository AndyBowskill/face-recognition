import React from 'react';
import './FaceRecognition.style.css';

const FaceRecognition = ({ imageURL, faceBox }) => {
  return (
      <div className='face-box flex'>
        <img id='face-recognition-image' alt='Face recognition' src={imageURL} width='500px' height='auto' />
        <div className='boundary-box' style={{top: faceBox.top_row, right: faceBox.right_column, bottom: faceBox.bottom_row, left: faceBox.left_column}}></div>
      </div>
  );
};

export default FaceRecognition;
