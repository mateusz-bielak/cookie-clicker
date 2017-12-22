import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Dashboard from '../../components/Dashboard';

let clock;
let wrapper;

beforeEach(() => {
  clock = sinon.useFakeTimers();
  wrapper = shallow(<Dashboard />);
});

test('should render Dashboard', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should add cookie', () => {
  wrapper.setState({ cookiesAmount: 10 });
  wrapper.find('CookiePanel').prop('addCookie')();
  expect(wrapper.state('cookiesAmount')).toBe(11);
});


// test('should add cookies by cookiesPerSecond', () => {
//   wrapper.setState({ cookiesPerSecond: 10 });
//   clock.tick(3000);
//   expect(wrapper.state('cookiesAmount')).toBe(30);
// });

test('should maintain building purchase', () => {
  wrapper.find('StorePanel').prop('buildingBought')(100, 5);
  expect(wrapper.state()).toEqual({ cookiesAmount: -100, cookiesPerSecond: 5 });
});
