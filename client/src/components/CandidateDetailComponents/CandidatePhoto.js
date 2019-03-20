import React from 'react';

const Photo = (props) => {
  const photoStyle = {
    display: "inline-block",
    verticalAlign: "top",
    height: "600px"
  }
  return( 
    <img style={photoStyle} src={props.image} alt=''></img>
  )
};

export default Photo;