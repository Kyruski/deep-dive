import React from 'react';
import PolicyCard from './PolicyCard.js';

const PolicyBlock = (props) => {
  const { abortion, lgbtAdoption, gunControl, equalPay, climateChange, gayMarriage, borderWall, plannedParenthood } = props.candidate.policies;
  const policyNames = Object.keys(props.candidate.policies);
  const policies = [abortion, lgbtAdoption, gunControl, equalPay, climateChange, gayMarriage, borderWall, plannedParenthood];
  const divStyle = {
    display: 'inline-flex',
    flexWrap: 'wrap'
  }
  return( 
    <div style={divStyle}>
      {policies.map((el, ind) => <PolicyCard title={policyNames[ind]} policy={el}/>)}
    </div>
  )
};

export default PolicyBlock;