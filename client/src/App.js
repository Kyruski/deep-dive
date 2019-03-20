import React, { Component } from 'react';
import VoterInfoDetail from "./components/VoterInfoDetail.js";
import { Router, Link } from "@reach/router";
import LandingPage from "./components/LandingPage";
import { Head, HeadRoutes } from "./header";
import './App.css';
import VoterId from './components/voterId';

const api = `http://localhost:8000/api/example`;

class App extends Component {
  constructor() {
    super();
    this.state = { seaCreatures: [] };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Head />
        <HeadRoutes />
        <VoterInfoDetail />
        <Router>
          <LandingPage path="/" />
          <CandidateList path="candidates/*" />
          <VoterInfoDetail path="voterInfo/*" />
        </Router>
        <VoterId />
      </>
    );
  }
}

export default App;

// Everything below this point is a placeholder

const CandidateList = props => <div>This is our Candidate List</div>;

const header = {
  height: "100px",
  borderBottom: "1px solid black"
};
