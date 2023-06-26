import React from 'react';
import { shallow } from 'enzyme';
import PhoneInput from './PhoneInput';

describe('PhoneInput component', () => {
  it('should format a complete phone number', () => {
    const wrapper = shallow(<PhoneInput />);
    const input = wrapper.find('#phone');
    
    input.simulate('change', { target: { value: '1234567890' } });
    expect(wrapper.state('phoneNumber')).toEqual('(123) 456-7890');
  });

  it('should format an incomplete phone number', () => {
    const wrapper = shallow(<PhoneInput />);
    const input = wrapper.find('#phone');
    
    input.simulate('change', { target: { value: '123456' } });
    expect(wrapper.state('phoneNumber')).toEqual('(123) 456');
  });
  
});
