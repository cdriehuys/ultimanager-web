import React from 'react';

import RegistrationForm from '../components/RegistrationForm';
import { Heading } from '../components/typography';


const RegistrationContainer = () => (
  <div>
    <Heading.h1 align="center">Register</Heading.h1>
    <RegistrationForm />
  </div>
);


export default RegistrationContainer;
