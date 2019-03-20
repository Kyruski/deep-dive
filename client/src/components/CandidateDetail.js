import React, {Component} from 'react';
import './CandidateDetailComponents/CandidateDetail.css';
import BiographicCard from './CandidateDetailComponents/BiographicCard.js'
import Photo from './CandidateDetailComponents/CandidatePhoto.js'
import PolicyBlock from './CandidateDetailComponents/PolicyBlock.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.candidateTemplate = {
      firstname: '',
      lastname: '',
      nickname: '',
      birthday: '',
      photo: '',
      campaign: '',
      twitter: '',
      party: '',
      bio: '',
      donors: '',
      policies: {
        abortion: '',
        lgbtAdoption: '',
        gunControl: '',
        equalPay: '',
        climateChange: '',
        gayMarriage: '',
        borderWall: '',
        plannedParenthood: ''
      }
    }
    this.trumpTest = {
      firstname: 'Donald',
      lastname: 'Trump',
      nickname: 'Donnie Boy',
      birthday: '1946-06-14',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/440px-Donald_Trump_official_portrait.jpg',
      campaign: 'https://www.donaldjtrump.com/',
      twitter: 'realDonaldTrump',
      party: 'Republican',
      bio: 'Donald J. Trump is the current President of the United States of America, and is seeking re-election under the Republican Party. Donald Trump was born and raised in Queens, New York City. He announced his bid for re-election on January 17, 2017. He has worked as a real-estate developer, businessman, and reality TV host.  Donald Trump’s primary platform is focused on: 1. Focusing on Immigration and building a border wall between the USA and Mexico, and 2. Changing how the US trades with other countries (Trade deals, Tariffs, Sanctions).',
      donors: 'N/A',
      policies: {
        abortion: 'Pro-Life',
        lgbtAdoption: 'Yes',
        gunControl: 'No',
        equalPay: 'No',
        climateChange: 'No',
        gayMarriage: 'Yes',
        borderWall: 'Yes',
        plannedParenthood: 'No'
      }
    }
  }

  render() {
    return (
      <div test-id='ancestor' style={{backgroundColor: '#ECECEC', padding: '20px', alignContent: 'center' }}>
        <BiographicCard candidate={this.trumpTest} />
        {/* <Photo image={this.trumpTest.photo} /> */}
        <PolicyBlock candidate={this.trumpTest}/>
      </div>
    )
  }
}