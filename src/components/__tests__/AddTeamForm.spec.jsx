import { shallow } from 'enzyme';
import React from 'react';

import { addTeam } from '../../actionCreators';

import { AddTeamForm, mapDispatchToProps } from '../AddTeamForm';


const setup = () => {
  const props = {
    onSubmit: jest.fn(),
  };
  const wrapper = shallow(<AddTeamForm {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('AddTeamForm', () => {
  it('should have an initial state for form contents', () => {
    const { wrapper } = setup();

    expect(wrapper.state('id')).toBe(null);
    expect(wrapper.state('name')).toBe('');
  });

  it('should call onSubmit with an ID and name when submitted', () => {
    const team = {
      id: 1,
      name: 'Foo',
    };

    const { props, wrapper } = setup();
    wrapper.instance().state = team;

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(props.onSubmit).toHaveBeenCalledWith(team);
  });

  describe('change handlers', () => {
    it('should update the stored ID when the corresponding input changes', () => {
      const { wrapper } = setup();
      const idWrapper = wrapper.find('input[name="id"]');

      const newId = '3';

      idWrapper.simulate('change', { target: { value: newId } });

      expect(wrapper.state('id')).toBe(parseInt(newId, 10));
    });

    it('should update the stored name when the corresponding input changes', () => {
      const { wrapper } = setup();
      const nameWrapper = wrapper.find('input[name="name"]');

      const newName = 'Foo';

      nameWrapper.simulate('change', { target: { value: newName } });

      expect(wrapper.state('name')).toBe(newName);
    });
  });

  describe('redux connections', () => {
    it('should map dispatching actions to props', () => {
      const team = {
        id: 1,
        name: 'Foo',
      };

      const dispatch = jest.fn();
      const expectedAction = addTeam(team);

      const props = mapDispatchToProps(dispatch);

      props.onSubmit(team);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
