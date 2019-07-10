import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';
import "./Numbers.css";


const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [calcNum, setCalcNum] = useState(numbers);



  
  return (
    <div>
      {calcNum.map( (number, i) => {
        return <NumberButton key={i} value={number} functionVar={props.displayContent} />
      })}
    </div>
  );
};
export default Numbers;