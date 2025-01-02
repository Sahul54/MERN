import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setExpression(eval(expression).toString());
      } catch {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    } else {
      setExpression(expression + value);
    }
  };

  return (
    // <div className="calculator">
    //   <Display value={expression} />
    //   <div className="buttons">
    //     {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C']
    //     .map((btn) => (
    //       <Button key={btn} value={btn} onClick={() => handleClick(btn)} />
    //     ))}
    //   </div>
    // </div>
    <div>
      <Display>{expression}</Display>
      <div>
        {
          ['7','8','9','4','5','6','1','2','3','0','.','+','-','*','/']
        }
      </div>
    </div>
  );
};

export default Calculator;
