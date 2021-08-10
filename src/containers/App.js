import React from 'react';
import Navigation from '../components/Navigation/Navigation.component';
import Rank from '../components/Rank/Rank.component';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.component';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonClick = () => {
    this.setState({ imageURL: this.state.input });
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
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
