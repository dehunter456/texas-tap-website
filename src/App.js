import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './reusables/Button.js';
import EventList from './reusables/EventList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <EventList />
    );
  }
}

export default App;
