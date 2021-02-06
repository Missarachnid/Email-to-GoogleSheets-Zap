import React from 'react';
import { StyledResults } from './styles/StyledResults'

const Success = () => {
  return(
    <StyledResults>
      <h1>Success! Your information has been sent.</h1>
      <a href='https://docs.google.com/spreadsheets/d/1n8XswAXn9Hr7nz1qfhXRRQCo7iavQkaYO7Aur9TNDdc/edit?usp=sharing' rel='noreferrer noopener' target='_blank'>The sheet can be viewed here</a>
    </StyledResults>
  )
  } 
export default Success;