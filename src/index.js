import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducer that holds our results

const initialState = {
  loading: true,
  values: []
};

const randomImage = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RANDOM":
      return {
        loading: false,
        values: action.payload
      };
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        randomImage,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));