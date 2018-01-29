import React from 'react';
import './Keypad.css';

import Key from '../Key/Key';

const Keypad = () => {
  let numbers = ['ce', 0, '.', 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let actions = ['/', 'x', '-', '+'];

  numbers = numbers.reverse().map((number, iterator) => {
    return (
      <Key
        key={`${number}${iterator}`}
        keyType="number-key" 
        keyValue={number}
      />
    );
  });

  actions = actions.map((action, iterator) => {
    return (
      <Key
        key={`${action}${iterator}`}
        keyType="action-key" 
        keyValue={action} 
      />
    );
  });

  return (
    <div className="keypad-container">
      <div className="numbers-container">
        {numbers}
      </div>
      <div className="actions-container">
        {actions}
      </div>
    </div>
  );
}

export default Keypad;