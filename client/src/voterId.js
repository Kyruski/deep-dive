import React, { useState } from 'react';
import { Select } from 'antd';

import 'antd/dist/antd.css';

const VoterId = () => {
  const Option = Select.Option;

  //make a GET request to fill states (may be able to gather static info)
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  } //this should make a call to the api
  
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <Select
      size={'large'}
      defaultValue="Alabama"
      onChange={handleChange}
      style={{ width: 200 }}
    >
      {children}
    </Select>
  )
}

export default VoterId;