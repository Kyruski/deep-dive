import React from 'react';
import { Card } from 'antd';

const PolicyListEntry = (props) => {
  return (
    <Card>
      <p>{props.policy}</p>
    </Card>
  )
};

export default PolicyListEntry;