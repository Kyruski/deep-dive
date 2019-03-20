import React from 'react'
import {List} from 'antd';

const BioList = (props) => {
  const data = props.data;
  return( 
    <List
      size={'small'}
      bordered={false}
      split={false}
      dataSource={[1,2,3,4,5]} //replace placeholder with data on ln 5 
      renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
  )
};

export default BioList;