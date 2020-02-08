import React from 'react';
import Board from './Board.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Board />', () => {
  it('renders five <Square /> components', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('Square')).toHaveLength(9);
  });
});