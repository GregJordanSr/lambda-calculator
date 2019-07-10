import React, { useState } from "react";
import { operators} from '../../../data';
import OperatorButton from './OperatorButton';


const Operators = props => {
  
  const [calcOperator, setOperators] = useState(operators);
  return (
    <div>
      {calcOperator.map( (operator, i) => {
        return <OperatorButton propName={operator} index={i} functionVar={props.displayContent}  />
      })}
    </div>
  );
};

export default Operators; 
