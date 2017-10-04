import { shallow } from 'enzyme';
import React from 'react';

import RegistrationForm from '../../components/RegistrationForm';

import RegistrationContainer from '../RegistrationContainer';


const setup = () => {
  const wrapper = shallow(<RegistrationContainer />);

  return { wrapper };
};


describe('RegistrationContainer', () => {
  it('should render a registration form', () => {
    const { wrapper } = setup();

    expect(wrapper.find(RegistrationForm)).toHaveLength(1);
  });
});
