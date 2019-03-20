import React from 'react'
import {Card} from 'antd';
import BioList from './BiographicDetailList.js'
const BioCard = (props) => {
  return( 
    <Card title={props.name}>
      <BioList details={props.details} />
    </Card>
  )
};

export default BioCard;