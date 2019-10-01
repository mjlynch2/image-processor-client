import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  // Renders the entire app on the DOM
  state = {
    path: null,
    description: ''
  }


  getRandomGif = () => {
    Axios.get('/random')
    .then((response) => {
      this.setState({
        path: response.path,
        description: response.description
      })
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
      </div>
    );
  }
}

export default App;
