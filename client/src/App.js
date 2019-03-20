import React, { Component } from 'react';
<<<<<<< HEAD
import VoterInfoDetail from "./components/VoterInfoDetail.js";
import { Router, Link } from "@reach/router";
import LandingPage from "./components/LandingPage";
import { Head, HeadRoutes } from "./header";
import './App.css';
import VoterId from './components/voterId';
=======
import './App.css';
import { Head, MainRoutes } from './components/header'

>>>>>>> 2480b26235984a466aabfb3c47490f3911aa22ac

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
<<<<<<< HEAD
        <HeadRoutes />
        <VoterInfoDetail />
        <Router>
          <LandingPage path="/" />
          <CandidateList path="candidates/*" />
          <VoterInfoDetail path="voterInfo/*" />
        </Router>
        <VoterId />
=======
        <MainRoutes />
        {/* need to update with CandidateList */}
>>>>>>> 2480b26235984a466aabfb3c47490f3911aa22ac
      </>
    );
  }
}

export default App;
