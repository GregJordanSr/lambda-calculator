import React from "react";
import "../../../App.css"

const SpecialButton =props => {
  return (
    <>
      <button className="btn spec-btn" onClick={() => props.value === "C" ? props.clearDisplay() : props.functionVar(props.value)}>{props.value}</button>
    </>
  );
};
export default SpecialButton;
{/* {props.value === "C" ? props.clearDisplay()  : props.value} */}