import React from 'react';
import { shallow } from 'enzyme';
import Building from '../../components/Building';
import buildings from '../../settings/buildings';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Building
    data={buildings[0]}
    cookiesAmount={25}
    buildingBought={jest.fn()}
  />);
});

test('should render Building', () => {
  expect(wrapper).toMatchSnapshot();
});
