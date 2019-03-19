import React from 'react';
import { Card } from 'antd';

const Biography = (props) => {
  return( 
    <Card title={props.name} bordered={false}>
      <p>{props.biography}</p>
    </Card>
  )
};

export default Biography;