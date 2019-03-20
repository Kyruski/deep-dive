
import React, { Component } from 'react';
import './App.css';
import { Head, MainRoutes } from './components/header'


console.log(MainRoutes);
const api = `http://localhost:8000/api/example`;

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
