import React from 'react';
import { shallow } from 'enzyme';
import CookiePanel from '../../components/CookiePanel';

test('should render CookiePanel', () => {
  const wrapper = shallow(<CookiePanel />);
  expect(wrapper).toMatchSnapshot();
});

test('should add cookie', () => {
  const wrapper = shallow(<CookiePanel />);
  wrapper.find('button').prop('onClick')();
  expect(wrapper.state().cookiesAmount).toBe(1);
});
