import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

class App extends Component {
  state = {
    selectedImage: null
  };
  // Renders the entire app on the DOM
  componentDidMount() {
    this.getRandomImages();
  }

  getRandomImages = () => {
    Axios.get("/random")
      .then(response => {
        this.props.dispatch({ type: "SET_RANDOM", payload: response.data });
        console.log(response);
      })
      .catch(error => {
        console.log("Error in GET:", error);
      });
  };

  handleClick = (id, path) => {
    this.setState({selectedImage: path});
    console.log("id is", id);
  };

  render() {
    if (this.props.randomImage.loading) {
      return <div>loading....... </div>;
    }
    return (
      <div>
        <header className="App-header">
          <h1>Photos provided by <a href='http://pixabay.com'>Pixabay</a></h1>
        </header>
        <div>
          <img src={this.state.selectedImage} alt="test"/>
        </div>
        {this.props.randomImage.values.map((image, index) => (
          <img
            onClick={() => this.handleClick(image.id, image.webformatURL)}
            key={index}
            src={image.webformatURL}
            alt={image.id}
          ></img>
        ))}
      </div>
    );
  }
}

const putStateOnProps = reduxState => ({
  randomImage: reduxState.randomImage
});

export default connect(putStateOnProps)(App);
