import React from "react";
import "./DisplayedContent.css";


const Display = props => {
  return (
    <div className="display-wrapper">
      <div className="content-displayed">{props.displayProps}</div>
  </div>
  )
  
};

export default Display;
