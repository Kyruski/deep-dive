import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import LandingPage from "./components/LandingPage";

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
        <div style={header}>
          <Link to="/">Back home</Link>{" "}
        </div>
        <Router>
          <LandingPage path="/" />
          <CandidateList path="candidates/*" />
          <VoterInfo path="voterInfo/*" />
        </Router>
      </>
    );
  }
}

export default App;

// Everything below this point is a placeholder

const CandidateList = props => <div>This is our Candidate List</div>;
const VoterInfo = props => <div>This is the voter info page</div>;

const header = {
  height: "100px",
  borderBottom: "1px solid black"
};
