import React from "react";


const NumberButton = props => {
  return (
    <>
      <button className="num-btn"> 
        <h1 onClick={() => props.functionVar(props.value)}>{props.value}</h1> 
        
      </button>
    </>
  );
};

export default NumberButton;
