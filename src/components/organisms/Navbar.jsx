import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MenuButton, NavbarTitle } from '../atoms';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const Navbar = () => {
  const onClick = () => {};

  return (
    <StyledNav>
      <MenuButton onClick={onClick} />
      <NavbarTitle />
    </StyledNav>
  );
};

Navbar.propTypes = {};

export default Navbar;
