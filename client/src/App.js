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

  componentDidMount() {
    fetch(api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
  }

  render() {
    return (
      <>
        <div style={header}>
          <Link to="/">Back home</Link>{" "}
        </div>
        <div style={app}>
          <Router>
            <LandingPage path="/" />
            <CandidateList path="candidates/*" />
            <VoterInfo path="voterInfo/*" />
          </Router>
        </div>
        <div style={footer}>Footer Placeholder</div>
      </>
    );
  }
}

export default App;

const CandidateList = props => <div>This is our Candidate List</div>;
const VoterInfo = props => <div>This is the voter info page</div>;

const app = {
  height: "800px"
};

const header = {
  height: "100px",
  borderBottom: "1px solid black"
};

const footer = {
  height: "100px",
  borderTop: "1px solid black"
};
