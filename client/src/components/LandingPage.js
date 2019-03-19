import React, { Fragment } from "react";
import { Link } from "@reach/router";

const LandingPage = props => (
  <div style={container}>
    <Link to="candidates" style={{ textDecoration: "none" }}>
      <div style={card}>candidates</div>
    </Link>
    <Link to="voterInfo" style={{ textDecoration: "none" }}>
      <div style={card}>voterInfo</div>
    </Link>
  </div>
);

export default LandingPage;

const card = {
  height: "100px",
  width: "100px",
  backgroundColor: "lightgray",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black"
};

const container = {
  display: "flex"
};
