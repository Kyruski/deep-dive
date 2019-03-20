import React from 'react';
import { Card } from 'antd';

const PolicyCard = (props) => {
  const cardStyle = {
    width: '200px',
    margin: '6px'
  }
  return (
    <Card title={props.title} style={cardStyle}>
      <p>{props.policy}</p>
    </Card>
  )
};

export default PolicyCard;