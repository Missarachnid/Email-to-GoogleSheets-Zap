import React from 'react';
import { StyledResults } from './styles/StyledResults';

//This is shown when something goes wrong when submitting the form information
const Failure = () => (
  <StyledResults>
    <h1>Oh No! Something has gone wrong!</h1>
    <h2>Please refresh and try again.</h2>
  </StyledResults>
);
export default Failure;