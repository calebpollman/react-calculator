import React, { Component } from 'react';
import './Calculator.css';
import Display from "../Display/Display";
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {
    state = {
        // value to be displayed in <Display />
        displayValue: '0',
        // values to be displayed in number <Keys />
        numbers: [],
        // values to be displayed in operator <Keys />
        operators: [],
        // operator selected for math operation
        selectedOperator: '',
        // stored value to use for math operation
        storedValue: '',
    }

    callOperator = () => {
        console.log('call operation');
    }

    setOperator = () => {
        console.log('set operation');
    }

    updateDisplay = () => {
        console.log('update display');
    }

    render = () => {
        // unpack the component state by using Object Destructuring
        const { displayValue, numbers, operators } = this.state;
        return (
            <div className="calculator-container">
                <Display displayValue={displayValue}/>
                <Keypad
                    callOperator={this.callOperator}
                    numbers={numbers}
                    operators={operators}
                    setOperator={this.setOperator}
                    updateDisplay={this.updateDisplay}
                />
            </div>
        );
    }
}

export default Calculator;