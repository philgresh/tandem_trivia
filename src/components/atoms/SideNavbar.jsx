import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const sidebarLinks = [
  {
    to: '/play',
    title: 'New Round',
  },
];

const Links = ({ toggle }) =>
  sidebarLinks.map(({ to, title }) => (
    <NavLink key={to} to={to} activeClassName="selected" onClick={toggle}>
      {title}
    </NavLink>
  ));

Links.propTypes = {
  toggle: PropTypes.func.isRequired,
};

const SideNavbar = ({ open, toggle }) => {
  return (
    <>
      <div className={`sidenav ${open ? '' : 'hidden'}`} data-testid="sidenav">
        <Links toggle={toggle} />
      </div>
      <div
        className={`sidenav-background ${open ? '' : 'hidden'}`}
        onClick={toggle}
        role="presentation"
        data-testid="sidenav-background"
      />
    </>
  );
};

SideNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default SideNavbar;
