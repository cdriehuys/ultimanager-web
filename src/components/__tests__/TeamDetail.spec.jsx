import { shallow } from 'enzyme';
import React from 'react';

import { TeamDetail, mapStateToProps } from '../TeamDetail';


const setup = (team = { id: 1, name: 'Foo' }) => {
  const props = { team };
  const wrapper = shallow(<TeamDetail {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('TeamDetail', () => {
  it('should render the name of the provided team', () => {
    const { props, wrapper } = setup();

    expect(wrapper.text()).toEqual(expect.stringContaining(props.team.name));
  });

  describe('redux connections', () => {
    it('should pull the given team from the redux store', () => {
      const state = {
        teams: {
          byId: {
            1: { id: 1, name: 'Foo' },
          },
        },
      };

      const expected = {
        team: state.teams.byId[1],
      };

      const mockProps = {
        match: {
          params: { id: 1 },
        },
      };

      expect(mapStateToProps(state, mockProps)).toEqual(expected);
    });
  });
});
