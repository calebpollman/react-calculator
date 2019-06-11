import { shallow } from 'enzyme';
import Key from './Key';

const MOCK_HANDLE_KEY_PRESS = jest.fn();
const MOCK_KEY_ACTION = jest.fn();
const MOCK_KEY_TYPE = 'number-key';
const MOCK_KEY_VALUE = '7';

describe('Key', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Key
        handleKeyPress={MOCK_HANDLE_KEY_PRESS}
        keyAction={MOCK_KEY_ACTION}
        keyType={MOCK_KEY_TYPE}
        keyValue={MOCK_KEY_VALUE}
      />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the value of keyValue', () => {
    wrapper.setProps({ keyValue: 'test' });
    expect(wrapper.text()).toEqual('test');
  });
});
