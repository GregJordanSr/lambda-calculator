import React from "react";
import "../../../App.css"

const SpecialButton =props => {
  return (
    <>
      <h1 onClick={() => props.functionVar(props.value)}>{props.value}</h1>
    </>
  );
};
export default SpecialButton;