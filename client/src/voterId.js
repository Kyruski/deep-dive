import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Select } from 'antd';

import 'antd/dist/antd.css';

const VoterId = () => {
  const Option = Select.Option;

  let [states, setStates] = useState([]);
  const children = [];

  useEffect(() => {
    const api = 'http://localhost:8000/api/voter';
    Axios
      .get(api)
      .then((results) => {
        setStates(results.data);
      })
     .catch((err) => console.log('error', err))
  }, [])


  for (let i = 0; i < states.length; i++) {
    children.push(<Option key={states[i]}>{states[i]}</Option>);
  } //this should make a call to the api
  
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <Select
      size={'large'}
      defaultValue={states[0]}
      onChange={handleChange}
      style={{ width: 200 }}
    >
      {children}
    </Select>
  )
}

export default VoterId;