import React from 'react';
import { Link } from 'react-router-dom';

const NavbarTitle = () => {
  return (
    <Link to="/">
      <h1 data-testid="navbar-title">Practice Tandem Trivia!</h1>
    </Link>
  );
};

NavbarTitle.propTypes = {};

export default NavbarTitle;
