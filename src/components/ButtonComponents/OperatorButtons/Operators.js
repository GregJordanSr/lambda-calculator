import React, { useState } from "react";
import { operators} from '../../../data';
import OperatorButtons from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [calcOperator, setOperators] = useState(operators);
  return (
    <div>
      {calcOperator.map( (operator, i) => {
        return <OperatorButtons key={operator} i={i} />
      })}
    </div>
  );
};

export default Operators; 
