import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Dashboard from '../../components/Dashboard';

test('should render Dashboard', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});

test('should add cookie', () => {
  const wrapper = shallow(<Dashboard />);
  wrapper.setState({ cookiesAmount: 10 });
  wrapper.find('CookiePanel').prop('addCookie')();
  expect(wrapper.state('cookiesAmount')).toBe(11);
});

test('should add cookies by cookiesPerSecond', () => {
  const clock = sinon.useFakeTimers();
  const wrapper = shallow(<Dashboard />);
  wrapper.setState({ cookiesPerSecond: 10 });
  clock.tick(3000);
  expect(wrapper.state('cookiesAmount')).toBe(30);
});
