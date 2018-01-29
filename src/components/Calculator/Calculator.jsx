import React from 'react';
import './Calculator.css';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const Calculator = () => {
  return (
    <div className="calculator-container">
      <Display />
      <Keypad />
    </div>
  );
}
 
export default Calculator;