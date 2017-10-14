import React from 'react';

import Container from '../components/Container';
import RegistrationForm from '../components/RegistrationForm';
import { Heading } from '../components/typography';


const RegistrationContainer = () => (
  <Container>
    <Heading.h1 align="center">Register</Heading.h1>
    <RegistrationForm />
  </Container>
);


export default RegistrationContainer;
