import React from 'react';
import './Key.css';

const Key = ({keyType, keyValue}) => {
  const keyClass = `key-container ${keyType}`;
  
  return (
    <div className={keyClass}>
      <p className="key-value">
        {keyValue}
      </p>
    </div>
  );
}

export default Key;