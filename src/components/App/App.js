import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Axios from 'axios';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.getRandomGif();
  }

  getRandomGif = () => {
    Axios.get('/random')
    .then((response) => {
      this.props.dispatch({type: 'SET_RANDOM', payload: response.data})
      console.log(response);
      
    }).catch((error) => {
      console.log('Error in GET:', error)
    })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Random Giphy API</h1>
        </header>
        
        <p>Results go here</p>
        <img src={this.props.random.path}></img>
        <br/>
        {this.props.random.description}
        <br />
        <button onClick={this.getRandomGif}>New Random Gif!</button>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({
  random: reduxState.random
})

export default connect(putStateOnProps)(App);
