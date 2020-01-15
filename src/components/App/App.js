import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

class App extends Component {
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

  render() {
    if (this.props.randomImage.loading) {
      return <div>loading....... </div>;
    }
    return (
      <div>
        <header className="App-header">
          <h1>Photos provided by Pexels</h1>
        </header>
        {JSON.stringify(this.props.random)}
        {this.props.randomImage.values.map((image, index) => (
          <img key={index} src={image.src.tiny} alt={image.id}></img>
        ))}
      </div>
    );
  }
}

const putStateOnProps = reduxState => ({
  randomImage: reduxState.randomImage
});

export default connect(putStateOnProps)(App);
