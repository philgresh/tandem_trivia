import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin-bottom: 0;
  padding: 0 1rem;
`;

const NavbarTitle = () => {
  return <StyledTitle>Practice Tandem Trivia!</StyledTitle>;
};

NavbarTitle.propTypes = {};

export default NavbarTitle;
