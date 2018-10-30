import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ displayValue }) => (
  <div className="display-container">
    <p className="display-value">
      {displayValue}
    </p>
  </div>
);

Display.propTypes = { displayValue: PropTypes.string.isRequired }

Display.defaultProps = { displayValue: 'default' }

export default Display;
