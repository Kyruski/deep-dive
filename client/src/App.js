<<<<<<< HEAD

import React, { Component } from 'react';
import PollMap from './components/PollMap.js';
import './App.css';
import CandidateDetail from './components/CandidateDetail.js'
import { Head, MainRoutes } from './components/header'


=======
import React, { Component } from "react";
import PollMap from "./components/PollMap.js";
import CandidateDetail from './components/CandidateDetail.js'
import "./App.css";
import { Head, MainRoutes } from "./components/header";
>>>>>>> 29039e791fcc976de140b69494d64714542e728c
console.log(MainRoutes);

class App extends Component {
  constructor() {
    super();
    this.state = { seaCreatures: [] };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h1>Welcome to Blue Ocean</h1>
        <ul>
          {/* {this.state.seaCreatures.map((seaCreature, i) => <li key={i}>{seaCreature}</li>)} */}
        </ul>
        {/* <VoterInfoDetail /> */} 
        <CandidateDetail />
        {/* <Head /> */}
        {/* <MainRoutes /> */}
        {/* need to update with CandidateList */}
      </>
    );
  }
}

export default App;