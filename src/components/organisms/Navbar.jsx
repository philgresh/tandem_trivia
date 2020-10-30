import React from 'react';

import { MenuButton, NavbarTitle } from '../atoms';

const Navbar = () => {
  const onClick = () => {};

  return (
    <nav>
      <MenuButton onClick={onClick} />
      <NavbarTitle />
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
