import React from 'react';
import { shallow } from 'enzyme';
import BuildingInfo from '../../components/BuildingInfo';
import stats from '../fixtures/buildingStats';

test('should render BuildingInfo', () => {
  const wrapper = shallow(<BuildingInfo buildingInfo={stats} />);
  expect(wrapper).toMatchSnapshot();
});
