import React from 'react';
import './ImageLinkForm.style.css';

const ImageLinkForm = ({ onInputChange, onButtonClick }) => {
  return (
    <div className='form-box flex'>
      <div className='form-inner'>
        <input
          type='text'
          placeholder='Please enter your image'
          onChange={onInputChange}
        />
        <button onClick={onButtonClick}>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
