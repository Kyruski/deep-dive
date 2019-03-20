import React from 'react';
import { List } from 'antd';
import PolicyListEntry from './PolicyListEntry.js';

const PolicyList = (props) => {
  const listData = props.candidates;
  for (let i = 0; i < props.candidates.length; )
  return( 
    <>
    <List
    dataSource={listData}
    renderItem={item => (
      <List.Item>
        <PolicyListEntry policy={item.policy} position={item.position} />
      </List.Item>
    )}
    />
    </>
  )
};

export default PolicyList;