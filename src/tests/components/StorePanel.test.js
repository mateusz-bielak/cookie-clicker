import React from 'react';
import { shallow } from 'enzyme';
import StorePanel from '../../components/StorePanel';

test('should render StorePanel', () => {
  const wrapper = shallow(<StorePanel />);
  expect(wrapper).toMatchSnapshot();
});
