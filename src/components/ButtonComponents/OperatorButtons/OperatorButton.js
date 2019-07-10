import React from "react";

const OperatorButton = props => {
  return (
    <>
     <button className="btn opp-btn" onClick={() => props.functionVar(props.propName.value)}>{props.propName.value}</button> 
      
    </>
  );
};
export default OperatorButton;
