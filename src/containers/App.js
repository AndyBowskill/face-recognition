import React from 'react';
import Navigation from '../components/Navigation/Navigation.component';
import Rank from '../components/Rank/Rank.component';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.component';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition.component';
import Clarifai from 'clarifai';

const clarifaiApp = new Clarifai.App({
  apiKey: '32ae7e3365914151b4459c0565d870b4',
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      faceBox: {},
    };
  }

  calculateFaceLocation = (clarifaiData) => {
    const clarifaiRegionInfo =
      clarifaiData.outputs[0].data.regions[0].region_info;
    const faceRecognitionImage = document.getElementById(
      'face-recognition-image'
    );
    const width = Number(faceRecognitionImage.width);
    const height = Number(faceRecognitionImage.height);

    return {
      left_column: clarifaiRegionInfo.bounding_box.left_col * width,
      right_column:
        width - (clarifaiRegionInfo.bounding_box.right_col * width),
      top_row: clarifaiRegionInfo.bounding_box.top_row * height,
      bottom_row: height - (clarifaiRegionInfo.bounding_box.bottom_row * height),
    };
  };

  updateFaceBox = (box) => {
    console.log(box)
    this.setState({ faceBox: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonClick = () => {
    this.setState({ imageURL: this.state.input });

    clarifaiApp.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        console.log(response);
        this.updateFaceBox(this.calculateFaceLocation(response))
      }
      )
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Navigation />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonClick={this.onButtonClick}
        />
        <FaceRecognition imageURL={this.state.imageURL} faceBox={this.state.faceBox} />
      </div>
    );
  }
}

export default App;
