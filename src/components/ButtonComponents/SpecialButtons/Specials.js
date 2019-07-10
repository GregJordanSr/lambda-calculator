import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
const [calcSpecial, setSpecial] = useState(specials);

  return (
    <div>
      {calcSpecial.map( (special, i) => {
          return <SpecialButton  key={i} value={special} functionVar={props.displayContent} />
      })}
    </div>
  );
};

export default Specials;