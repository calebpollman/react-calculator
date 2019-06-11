import React from 'react';
import { mount, shallow } from 'enzyme';
import Keypad from './Keypad';

const MOCK_CALL_OPERATOR = jest.fn();
const MOCK_HANDLE_KEY_PRESS = jest.fn();
const MOCK_NUMBERS = ['7', '13'];
const MOCK_OPERATORS = ['+', '-'];
const MOCK_SET_OPERATOR = jest.fn();
const MOCK_UPDATE_DISPLAY = jest.fn();

describe('Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={MOCK_CALL_OPERATOR}
        handleKeyPress={MOCK_HANDLE_KEY_PRESS}
        numbers={MOCK_NUMBERS}
        operators={MOCK_OPERATORS}
        setOperator={MOCK_SET_OPERATOR}
        updateDisplay={MOCK_UPDATE_DISPLAY}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it("should render 4 <div />'s", () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render an instance of the Key component for each index of the numbers and operators props, and the submit Key', () => {
    const submitKeyValue = 1;
    const keyTotal = MOCK_NUMBERS.length + MOCK_OPERATORS.length + submitKeyValue;
    expect(wrapper.find('Key').length).toEqual(keyTotal);
  });
});

describe('mounted Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Keypad
        callOperator={MOCK_CALL_OPERATOR}
        handleKeyPress={MOCK_HANDLE_KEY_PRESS}
        numbers={MOCK_NUMBERS}
        operators={MOCK_OPERATORS}
        setOperator={MOCK_SET_OPERATOR}
        updateDisplay={MOCK_UPDATE_DISPLAY}
      />
    );
  });

  it('renders the values of the numbers prop to the DOM', () => {
    const numbers = MOCK_NUMBERS.join('');
    expect(wrapper.find('.numbers-container').text()).toEqual(numbers);
  });

  it('renders the values of the operators prop to the DOM', () => {
    const operators = MOCK_OPERATORS.join('');
    expect(wrapper.find('.operators-container').text()).toEqual(operators);
  });
});
