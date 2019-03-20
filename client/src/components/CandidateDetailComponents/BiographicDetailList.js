import React from 'react'
import {List} from 'antd';

const BioList = (props) => {
  const {birthday, twitter, campaign} = props.candidate;
  return( 
    <List
      size={'small'}
      bordered={false}
      split={false}
      dataSource={[birthday, `@${twitter}`, campaign]} //replace placeholder with data on ln 5 
      renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
  )
};

export default BioList;