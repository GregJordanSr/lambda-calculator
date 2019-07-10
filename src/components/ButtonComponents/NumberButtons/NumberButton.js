import React from "react";
import "./Numbers.css";

const NumberButton = props => {
  return (
    <>
      <button className={props.value === "0" ? "zero-btn" : "btn num-btn"}  onClick={() => props.functionVar(props.value)}> 
        {props.value}
        
      </button>
    </>
  );
};

export default NumberButton;
