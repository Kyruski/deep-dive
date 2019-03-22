import React from "react";
import { Card, Layout } from "antd";
import { Router, Link } from "@reach/router";
import SideBar from "./SideBar";
import RegCheckForm from "./regCheckForm";
import VoterId from "./voterId";
import PollMap from "./PollMap";
import "antd/dist/antd.css";
import "./LandingPage.css";

const { Meta } = Card;
const { Content } = Layout;
const polls = require("../lib/polls.jpg");
const voting = require("../lib/voting.jpg");
const registration = require("../lib/registration.jpeg");

const voterInfoItems = [
  ["what-to-bring", "voting-requirements", voting, "Voting Requirements", "Find out what you need to bring with you on voting day"],
  ["how-and-where", "polling-locations", polls, "Polling Locations", "Find your nearest polling locations"],
  ["am-i-registered", "register-to-vote", registration, "Register to Vote", "Find out if you are registered to vote in 30 seconds"]
];

let VoterInfoDetail = () => {
  return (
    <Layout>
      <SideBar />
      <Content style={{ height: "100vh", backgroundColor: "#ededed" }}>
        <Router primary={false}>
          <VoterInfo path="/" />
          <VoterId path="what-to-bring" />
          <PollLocations path="how-and-where" />
          <RegCheckForm path="am-i-registered" />
        </Router>
      </Content>
    </Layout>
  );
};

let VoterInfo = () => {
  return (
    <>
      <div className="card-container">
      {voterInfoItems.map((item, key) => (
        <Link to={item[0]} key={`voterInfoCard-${key}`}>
          <Card
            hoverable
            className="info-card"
            cover={<img alt={item[1]} src={item[2]} />}>
            <Meta
              title={item[3]}
              description={item[4]}
            />
          </Card>
        </Link>
      ))}
      </div>
    </>
  );
};

const PollLocations = () => {
  return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <PollMap />
    </div>
  );
};

export default VoterInfoDetail;
