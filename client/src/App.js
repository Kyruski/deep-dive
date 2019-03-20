import React, { Component } from 'react';
import PollMap from './components/PollMap.js';
import './App.css';
import { Head, MainRoutes } from './components/header'


console.log(MainRoutes);

class App extends Component {
  constructor() {
    super();
    this.state = { seaCreatures: [] };
  }

  componentDidMount() { }

  render() {
    return (
      <>
        <Head />
        <MainRoutes />
        {/* need to update with CandidateList */}
      </>
    );
  }
}

export default App;
