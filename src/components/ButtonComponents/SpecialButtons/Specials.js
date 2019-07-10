import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from './SpecialButton';
import "./Special.css";



const Specials = props => {

const [calcSpecial, setSpecial] = useState(specials);

  return (
    <div className="special-map">
      {calcSpecial.map( (special, i) => {
          return <SpecialButton  key={i} value={special} functionVar={props.displayContent} />
      })}
    </div>
  );
};

export default Specials;