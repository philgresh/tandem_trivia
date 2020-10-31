import React from 'react';
import { MenuButton, NavbarTitle, SideNavbar } from '../atoms';
import { useToggle } from '../logic';

const Navbar = () => {
  const [open, toggle] = useToggle();

  return (
    <>
      <nav>
        <MenuButton onClick={toggle} />
        <NavbarTitle />
      </nav>
      <SideNavbar open={open} toggle={toggle} />
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
