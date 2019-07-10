import React from "react";

const OperatorButton = props => {
  return (
    <>
     <h1 onClick={() => props.functionVar(props.propName.value)}>{props.propName.value}</h1> 
      
    </>
  );
};
export default OperatorButton;
