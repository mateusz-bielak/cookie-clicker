import React from 'react';
import { shallow } from 'enzyme';
import Building from '../../components/Building';
import buildings from '../../settings/buildings';

test('should render Building', () => {
  const wrapper = shallow(<Building data={buildings[0]} />);
  expect(wrapper).toMatchSnapshot();
});
