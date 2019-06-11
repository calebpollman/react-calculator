import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

const MOCK_DISPLAY_VALUE = 'a display value';

describe('Display', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Display displayValue={MOCK_DISPLAY_VALUE} />)));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders the value of displayValue', () => {
    expect(wrapper.text()).toEqual(MOCK_DISPLAY_VALUE);
  });
});
