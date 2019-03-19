import React, { useState } from 'react';
import { Select, Radio } from 'antd';

const VoterId = () => {
  const Option = Select.Option;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  
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