import React from 'react';
import PolicyCard from './PolicyCard.js';

const Policies = (props) => {
  const { abortion, lgbtAdoption, gunControl, equalPay, climateChange, gayMarriage, borderWall, plannedParenthood } = props.candidate.policies;
  const policyNames = Object.keys(props.candidate.policies);
  const policies = [abortion, lgbtAdoption, gunControl, equalPay, climateChange, gayMarriage, borderWall, plannedParenthood];
  return( 
    <>
      {policies.map((el, ind) => {
       return <PolicyCard title={policyNames[ind]} policy={el}/>
      })}
    </>
  )
};

export default Policies;