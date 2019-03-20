<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import { Head, HeadRoutes } from "./header";
import VoterInfoDetail from "./components/VoterInfoDetail.js";
import CandidateCards from "./components/CandidateCards.js";

import { Router, Link } from "@reach/router";
import LandingPage from "./components/LandingPage";

=======

import React, { Component } from 'react';
import PollMap from './components/PollMap.js';
import './App.css';
import { Head, MainRoutes } from './components/header'


console.log(MainRoutes);
>>>>>>> 060dc5226ecd21cd439fdd77ae7cd6a701c885ff
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
<<<<<<< HEAD
        <HeadRoutes />
        <VoterInfoDetail />
        <Router>
          <LandingPage path="/" />
          <CandidateList path="candidates/*" />
          <VoterInfoDetail path="voterInfo/*" />
        </Router>
=======
        <MainRoutes />
        {/* need to update with CandidateList */}
>>>>>>> 060dc5226ecd21cd439fdd77ae7cd6a701c885ff
      </>
    );
  }
}

export default App;
