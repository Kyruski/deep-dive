import React, { Component } from 'react';
import { Card } from 'antd';
import Photo from './CandidatePhoto.js'

class BioCard extends Component {
  constructor(props) {
    super(props)
    // this.bioCardRef = React.createRef(this.containerNode);
    this.state = {
      height: 0,
      width: 0,
      bioCardRef: React.createRef(this.containerNode)
    }
    this.pStyle = {
      margin: 0
    };
    this.cardStyle = {
      width:"50%", 
      height: "600px", 
      display:"inline-block"
    };
  }
  destructure() {
   const { firstname, nickname, lastname, birthday, twitter, campaign, bio } = this.props.candidate;
   this.setState({
     firstname: firstname,
     nickname: nickname,
     lastname: lastname,
     birthday: birthday,
     twitter: twitter,
     campaign: campaign,
     bio: bio
   })
  }
  //This function, along with with the ref to which it points,
  //were the bulk of an attempt to get the picture size automatically
  //based on the size of the card on this page. 
  measure() {
    const {clientWidth, clientHeight} = this.state.bioCardRef.current.container;
    this.setState({
      width: clientWidth,
      height: clientHeight,
    })
  }
  componentDidMount() {
    this.destructure();
    this.measure();
    console.log(this.state.bioCardRef.current.container.clientHeight)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.bioCardRef !== this.state.bioCardRef) {
    }
  }
  render() {
    return(
      <>
        <Card title={`${this.state.firstname} '${this.state.nickname}' ${this.state.lastname}`} style={this.cardStyle} ref={this.state.bioCardRef}>
          <p>{this.state.bio}</p>
          <p style={this.pStyle}>{this.state.birthday}</p>
          <p style={this.pStyle}>Twitter: <a href={`http://twitter.com/${this.state.twitter}`}>@{this.state.twitter}</a></p>
          <p>Campaign HQ: <a href={`${this.state.campaign}`}>{this.state.campaign}</a></p>
        </Card>
        <Photo image={this.props.candidate.photo} maxHeight={this.state.height}/>
      </>
    )
  }
};

export default BioCard;