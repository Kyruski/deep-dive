import React, { Component } from 'react';
import BiographicCard from './CandidateDetailComponents/BiographicCard.js'
import PolicyBlock from './CandidateDetailComponents/PolicyBlock.js';
import Axios from 'axios';
require('dotenv').config();

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: null,
      bio: '',
      policies: []
    }
    this.candidateDictionary = {
      'trump': 2,
      'weld': 3,
      'booker': 4,
      'buttigieg': 5,
      'castro': 6,
      'delaney': 7,
      'gabbard': 8,
      'gillibrand': 9,
      'harris': 10,
      'hickenlooper jr.': 11,
      'inslee': 12,
      'klobuchar': 13,
      'messam': 14,
      "o'rourke": 15,
      'sanders': 16,
      'warren': 17,
      'williamson': 18,
      'yang': 19,
      'kokesh': 20,
      'mcAfee': 21,
      'supreme': 22,
      'vohra': 23,
      'hunter': 24,
      'kroell': 25,
      'schriner': 26
    };
    this.vote = this.candidateDictionary[this.props.candId.toLowerCase()] || "404";
    this.server = process.env.SERVER || 'http://localhost:8000';
  };
  betterThanDemocracy() {
    if (this.vote === "404") {
      this.setState({ details: "404" })
    } else {
      Axios.get(`${this.server}/api/candidates/${this.vote}`)
        .then(data => this.setState({ details: data.data[0] }))
        .catch(err => console.log(err));

      Axios.get(`${this.server}/api/bios/${this.vote}`)
        .then(data => this.setState({ bio: data.data[0] }))
        .catch(err => console.log(err));

      Axios.get(`${this.server}/api/policies/${this.vote}`)
        .then(data => this.setState({ policies: data.data[0] }))
        .catch(err => console.log(err));
    }
  }
  componentDidMount() {
    this.betterThanDemocracy();
  }
  componentWillMount() {
    window.scrollTo(0, 0)
  }
  render() {
    if (this.state.details === "404") {
      return (
        <div>
          404 -- Oh no, something broke!
        <img src='http://66.media.tumblr.com/f4f3553d1bbef33713b3af38d3598436/tumblr_mnu1bxAXC11rf5vsao1_500.gif' alt="penguin-falling" />
        </div>
      )
    } else {
      return (
        <div test-id='ancestor' style={candidateDetailStyle}>
          <BiographicCard
            bio={this.state.bio}
            details={this.state.details}
            policies={this.state.policies}
          />
          <PolicyBlock policies={this.state.policies} candidate={this.trumpTest} />
        </div>
      )
    }
  };
};

const candidateDetailStyle = {
  backgroundColor: '#C0C0C0',
  padding: '20px',
  width: '100%'
};
