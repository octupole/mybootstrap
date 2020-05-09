import React from 'react';

const Auxiliary = (props) =>{
  props.data.total=props.data.flour + props.data.water + props.data.levain+props.data.salt;
  console.log(props.data.total,"illa ");
  return(
    <div></div>
  )
}

export default Auxiliary;