import { shallow } from 'enzyme';
import React from 'react';

import TeamList from '../TeamList';


const setup = ({ teams = [] } = {}) => {
  const props = { teams };
  const wrapper = shallow(<TeamList {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('TeamList', () => {
  it('should list all the teams given to it', () => {
    const teams = [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }];
    const { wrapper } = setup({ teams });

    teams.forEach((team) => {
      const item = wrapper.findWhere(node => node.key() === team.id.toString());
      expect(item.text()).toEqual(team.name);
    });
  });
});
