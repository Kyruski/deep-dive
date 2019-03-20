import React from 'react';
import { Card } from 'antd';

const BioCard = (props) => {
  const { firstname, nickname, lastname, birthday, twitter, campaign, bio } = props.candidate;
  const pStyle = {
    margin: 0
  }
  return(
    <> 
      <Card title={`${firstname} '${nickname}' ${lastname}`} style={{width:"500px", height: "600px", display:"inline-block"}}>
        <p>{bio}</p>
        <p style={pStyle}>{birthday}</p>
        <p style={pStyle}>Twitter: <a href={`http://twitter.com/${twitter}`}>@{twitter}</a></p>
        <p>Campaign HQ: <a href={`${campaign}`}>{campaign}</a></p>
      </Card>
    </>
  )
};

export default BioCard;