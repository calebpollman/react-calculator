import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

const Key = ({ handleKeyPress, keyAction, keyType, keyValue }) => {
  const keyClass = `key-container ${keyType}`;

  return (
    <div className={keyClass} onClick={() => keyAction(keyValue)} onKeyPress={event => handleKeyPress(event)}>
      <p className="key-value">{keyValue}</p>
    </div>
  );
};

Key.propTypes = {
  handleKeyPress: PropTypes.func.isRequired,
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

Key.defaultProps = {
  keyType: 'default',
  keyAction: 'default',
};

export default Key;
