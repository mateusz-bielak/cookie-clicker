import React from 'react';
import { shallow } from 'enzyme';
import CookiePanel from '../../components/CookiePanel';

test('should render CookiePanel', () => {
  const addCookie = jest.fn();
  const wrapper = shallow(<CookiePanel
    cookiesAmount={2500}
    cookiesPerSecond={10}
    addCookie={addCookie}
  />);
  expect(wrapper).toMatchSnapshot();
});
