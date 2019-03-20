import React from 'react';
import PolicyCard from './PolicyCard.js';

const PolicyBlock = (props) => {
  const { abortion, lgbtAdoption, gunControl, equalPay, climateChange, gayMarriage, borderWall, plannedParenthood } = props.candidate.policies;
  const policies = [abortion, lgbtAdoption, gunControl, equalPay, climateChange, gayMarriage, borderWall, plannedParenthood];
  const policyNames = ['Adoption', 'LGBT Adoption', 'Gun Control', 'Equal Pay', 'Climate Change', 'Gay Marriage', 'Border Wall', 'Planned Parenthood'];
  const divStyle = {
    // width: 0,
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