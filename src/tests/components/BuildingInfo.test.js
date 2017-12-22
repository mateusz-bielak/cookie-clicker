import React from 'react';
import { shallow } from 'enzyme';
import BuildingInfo from '../../components/BuildingInfo';
import stats from '../fixtures/producentStats';

test('should render BuildingInfo', () => {
  const wrapper = shallow(<BuildingInfo producentInfo={stats} />);
  expect(wrapper).toMatchSnapshot();
});
