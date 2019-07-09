import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [calcNum, setCalcNum] = useState(numbers);



  
  return (
    <div>
      {calcNum.map( (number, i) => {
        return <NumberButton key={i} value={number} />
      })}
    </div>
  );
};
export default Numbers;